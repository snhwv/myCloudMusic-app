import { ActivatedRoute, Params, Router } from "@angular/router";
import { CloudMusicService } from "./../../cloudMusic.service";
import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import { SongPlayService } from "../../songPlay.service";
@Component({
  selector: "app-songComment",
  templateUrl: "./songComment.component.html",
  styleUrls: ["./songComment.component.scss"]
})
export class SongCommentComponent implements OnInit {
  type: string; // 类型  如：歌单，歌曲等。
  comments;
  playingSong;
  data = {
    id: null,
    img: null,
    name: null,
    artist: null
  };
  constructor(
    private location: Location,
    private cloudMusicService: CloudMusicService,
    private songPlayService: SongPlayService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.data.id = params["id"];
      this.data.img = params["img"];
      this.data.name = params["name"];
      this.data.artist = params["artist"];
      this.type = params["type"];
      this.cloudMusicService
        .getComment(this.data.id, this.type)
        .subscribe(re => {
          this.comments = re;
          console.log(this.comments);
        });
    });
    this.playingSong = this.songPlayService.getbottomControlSong();
  }
  play() {
    // let id = this.song.id;
    console.log(this.data.id);
    console.log(this.playingSong);
    console.log(this.type);
    if (this.playingSong !== undefined && this.playingSong !== null) {
      if (
        this.data.id === this.playingSong.id.toString() &&
        this.type === "music"
      ) {
        this.router.navigate(["songPlay"]);
      } else {
        console.log("是否播放");
      }
    }

    // if (this.song !== undefined && this.song !== null) {
    //   this.insertList.emit(this.song);

    //   if (this.song.id === this.playingSongId) {
    //     this.router.navigate(["songPlay"]);
    //   } else {
    //     console.log("play");
    //     this.songPlayService.setPlaySong(this.song, this.index);
    //   }
    // }
  }
  goBack(): void {
    this.location.back();
  }
}
