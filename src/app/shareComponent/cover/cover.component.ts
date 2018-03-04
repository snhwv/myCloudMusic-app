import { Component, OnInit, Input } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-cover",
  templateUrl: "./cover.component.html",
  styleUrls: ["./cover.component.scss"]
})
export class coverComponent implements OnInit {
  @Input() recommend;
  @Input() type;
  constructor(private router:Router) {}

  ngOnInit() {
    if (this.type === 1) {
      // 歌单
    } else if (this.type === 2) {
      // 新碟
      // this.recommend.picUrl = this.recommend.song.album.picUrl;
      // this.recommend.playCount = 0;
    } else if (this.type === 3) {
      // 电台
    }
  }

  redirect(){
    let url="";
    // swicth(this.type){
    //   // case 1:url="/cloudMusic/songSheet/";break;
    //   // case 2:url="/cloudMusic/songSheet/";break;
    //   // case 3:;break;
    //   // default:;
    // }
    this.router.navigate(["/cloudMusic/songSheet/",this.recommend.id]);
  }
}
