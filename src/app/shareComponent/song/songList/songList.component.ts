import { SongPlayService } from "./../../../songPlay.service";
import { CloudMusicService } from "./../../../cloudMusic.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-songList",
  templateUrl: "./songList.component.html",
  styleUrls: ["./songList.component.scss"]
})
export class SongListComponent implements OnInit {
  @Input() songList;
  constructor(
    private cloudMusicService: CloudMusicService,
    private songPlayService: SongPlayService
  ) {}

  ngOnInit() {}
  setSongList() {
    if (this.songList !== null && this.songList !== undefined) {
      this.songPlayService.setSongList(this.songList);
    }
  }
}
