import { Component, OnInit } from "@angular/core";
import { SongPlayService } from "../../../songPlay.service";
@Component({
  selector: "app-playSongList",
  templateUrl: "./playSongList.component.html",
  styleUrls: ["./playSongList.component.scss"]
})
export class PlaySongListComponent implements OnInit {
  constructor(private songPlayService: SongPlayService) {}
  songList;
  ngOnInit() {
    this.songList = this.songPlayService.getSongStatic();
    console.log(this.songList);
    this.songPlayService.getSongList().subscribe(songList => {
      this.songList = songList;
      console.log(this.songList);
    });
  }
}
