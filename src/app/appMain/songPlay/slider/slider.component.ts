import { TopicComponent } from "./../../main/userRoom/topic/topic.component";
import { ViewChild, ElementRef, Input } from "@angular/core";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { SongPlayService } from "../../../songPlay.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  @Input() totalTime;
  @Input() playedTime;
  @ViewChild("sliderLineContainer") sliderLineContainer: ElementRef;
  @ViewChild("sliderLine") sliderLine: ElementRef;
  @ViewChild("slider") slider: ElementRef;
  constructor(
    private render: Renderer2,
    private songPlayService: SongPlayService
  ) {}
  totalWidth;
  currentTime: Subscription;
  ngOnInit() {
    this.totalWidth = this.sliderLineContainer.nativeElement.clientWidth;
    this.setListeners();
    this.playedTime = this.songPlayService.getCurrentTimeStatic();
    this.totalTime = this.songPlayService.getTotalTimeStatic();
    this.songPlayService.getTotalTime().subscribe(totalTime => {
      this.totalTime = totalTime;
    });
    this.currentTime = this.songPlayService
      .getCurrentTime()
      .subscribe(playedTime => {
        this.playedTime = playedTime;
      });
  }
  setListeners() {
    const sliderNative = this.slider.nativeElement;
    const sliderLineNative = this.sliderLine.nativeElement;
    const sliderLineContainerNative = this.sliderLineContainer.nativeElement;
    const maxWidth =
      sliderLineContainerNative.clientWidth - sliderNative.clientWidth;
    let startWidth;
    let startX;
    this.render.listen(sliderNative, "touchstart", event => {
      event.preventDefault();
      if (event.changedTouches.length !== 1) {
        return;
      }
      const touch = event.changedTouches[0];
      startX = touch.pageX;
      startWidth = sliderLineNative.clientWidth;
    });
    this.render.listen(sliderNative, "touchmove", event => {
      if (event.changedTouches.length !== 1) {
        return;
      }
      this.currentTime.unsubscribe();
      event.preventDefault();
      const touch = event.changedTouches[0];
      const offSetX = touch.pageX - startX;
      if (startWidth + offSetX >= 0 && startWidth + offSetX <= maxWidth) {
        this.playedTime = Math.floor(
          (startWidth + offSetX) / this.totalWidth * this.totalTime
        );
        // this.render.setStyle(
        //   sliderLineNative,
        //   "width",
        //   startWidth + offSetX + "px"
        // );
      }
    });
    this.render.listen(sliderNative, "touchend", event => {
      this.setChangeCurrentTime();
    });
    this.render.listen(sliderLineContainerNative, "click", event => {
      this.currentTime.unsubscribe();
      let newWidth = event.clientX - sliderLineContainerNative.offsetLeft;
      if (newWidth >= maxWidth) {
        newWidth = maxWidth;
      }
      this.playedTime = Math.floor(newWidth / this.totalWidth * this.totalTime);
      // this.render.setStyle(sliderLineNative, "width", newWidth + "px");
      this.setChangeCurrentTime();
    });
  }
  setChangeCurrentTime() {
    this.songPlayService.setChangeCurrentTime(this.playedTime);
    this.currentTime = this.songPlayService
      .getCurrentTime()
      .subscribe(playedTime => {
        this.playedTime = playedTime;
      });
  }
}
