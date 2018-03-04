import { Component, OnInit, OnDestroy } from "@angular/core";
import { SongPlayService } from "../../../songPlay.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-bottomBar",
  templateUrl: "./bottomBar.component.html",
  styleUrls: ["./bottomBar.component.scss"]
})
export class BottomBarComponent implements OnInit {
  constructor(private songPlayService: SongPlayService) {}
  palying;
  song;
  ngOnInit() {
    this.song = this.songPlayService.getbottomControlSong();
    this.palying = this.songPlayService.getPlayStateStatic();
    this.songPlayService.getPlaySong().subscribe(song => {
      this.song = song;
    });
    this.songPlayService.getPlayState().subscribe(palying => {
      this.palying = palying;
    });
  }
  controlBtnClicked() {
    this.palying = !this.palying;
    this.songPlayService.setPlayState(this.palying);
  }
}
