import { Input, Output, EventEmitter } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { SongPlayService } from "../../../songPlay.service";
import { Router } from "@angular/router";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { Subject } from "rxjs/Subject";
@Component({
  selector: "app-song",
  templateUrl: "./song.component.html",
  styleUrls: ["./song.component.scss"]
})
export class SongComponent implements OnInit, OnDestroy {
  @Input() index;
  @Output() insertList = new EventEmitter<any>();
  constructor(
    private songPlayService: SongPlayService,
    private router: Router
  ) {}
  @Input() song;
  ngOnInit() {}
  play() {
    const playingSong = this.songPlayService.getbottomControlSong();
    if (this.song !== undefined && this.song !== null) {
      this.insertList.emit(this.song);
      if (
        playingSong !== undefined &&
        playingSong !== null &&
        this.song.id === playingSong.id
      ) {
        this.router.navigate(["songPlay"]);
      } else {
        console.log("play");
        this.songPlayService.setPlaySong(this.song, this.index);
      }
    }
  }
  openDialog() {
    alert();
  }
  ngOnDestroy() {
    // this.subject.unsubscribe();
  }
}
