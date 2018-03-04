import { CloudMusicService } from "./../../../../../cloudMusic.service";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { SongPlayService } from "../../../../../songPlay.service";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  @Input() _event;
  type;
  event_json;
  videoUrl;
  song;
  constructor(
    private cloudMusicService: CloudMusicService,
    private songPlayService: SongPlayService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.event_json = JSON.parse(this._event.json);
    this.event_json = JSON.parse(this._event.json.replace(/album/g, "al").replace(/artists/g, "ar"));
    if (this._event.type === 39) {
      console.log(this.event_json);
      this.type = "发布视频";
      this.cloudMusicService
        .getEventVideoUrl(this._event.id, this._event.user.userId)
        .subscribe(re => {
          this.videoUrl = re.data.url;
        });
    } else if (this._event.type === 18) {
      this.type = "分享单曲";
      // this.event_json = JSON.parse(this._event.json.replace(/album/, "al"));
      
      this.song = this.event_json.song;
    } else if (this._event.type === 22){
      this.type = "转发";
      
    }
  }
  play() {
    const playingSong = this.songPlayService.getbottomControlSong();
    if (this.song !== undefined && this.song !== null) {
      if (
        playingSong !== undefined &&
        playingSong !== null &&
        this.song.id === playingSong.id
      ) {
        this.router.navigate(["songPlay"]);
      } else {
        console.log("play");
        this.songPlayService.insertSongToList(this.song);
        this.songPlayService.setPlaySong(this.song, 0);
      }
    }
  }
}
