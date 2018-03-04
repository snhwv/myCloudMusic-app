import { SongPlayService } from "./songPlay.service";
import { Component, OnInit, ViewChild, Renderer2 } from "@angular/core";
import { CloudMusicService } from "./cloudMusic.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("audio") audio;
  checked = false;
  indeterminate = false;
  align = "start";
  disabled = false;
  // audioUrl = "";
  constructor(
    private render: Renderer2,
    private songPlayService: SongPlayService,
    private cloudMusicService: CloudMusicService
  ) {}
  ngOnInit() {
    const nativeAudio = this.audio.nativeElement;
    this.render.listen(nativeAudio, "ended", () => {
      console.log("ended");
      this.songPlayService.nextSong("playing");
    });
    this.songPlayService.getSongUrl().subscribe(url => {
      if (url !== "" && url !== undefined && url !== null) {
        this.play(url);
      }
    });
    this.songPlayService.getPlayState().subscribe(palying => {
      palying ? nativeAudio.play() : nativeAudio.pause();
    });
  }
  play(url) {
    const nativeAudio = this.audio.nativeElement;
    nativeAudio.src = url;
    nativeAudio.play();
    this.songPlayService.setPlayState(true);
    this.songPlayService.getChangeCurrentTime().subscribe(changeCurrentTime => {
      if (changeCurrentTime < 0) {
        changeCurrentTime = 0;
      }
      nativeAudio.currentTime = changeCurrentTime;
    });
    this.render.listen(nativeAudio, "canplay", () => {
      this.songPlayService.setTotalTime(Math.floor(nativeAudio.duration));
    });
    this.render.listen(nativeAudio, "timeupdate", () => {
      this.songPlayService.setCurrentTime(Math.floor(nativeAudio.currentTime));
    });
  }
  getAudioUrl() {}
}
