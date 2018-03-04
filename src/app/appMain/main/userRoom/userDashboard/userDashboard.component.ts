// import { userRoomDatas } from './../data';
import { Component, OnInit } from "@angular/core";
import { CloudMusicService } from "../../../../cloudMusic.service";
import { userRoomDatas } from "../../../../data";
// import { CloudMusicService } from '../cloudMusic.service';

@Component({
  selector: "app-userDashboard",
  templateUrl: "./userDashboard.component.html",
  styleUrls: ["./userDashboard.component.scss"]
})
export class UserDashboardComponent implements OnInit {
  constructor(private cloudMusicService: CloudMusicService) {}
  datas;
  playlist = [];
  userId;
  ngOnInit() {
    this.datas = userRoomDatas;
    this.userId = this.cloudMusicService.getUser();
    this.cloudMusicService.getUserPlayList().then(playList => {
      this.setPlayList(playList);
    });
  }
  setPlayList(playList) {
    const createdList = [],
      addedList = [];
    for (let i = 0; i < playList.length; i++) {
      if (playList[i].userId === this.userId) {
        createdList.push(playList[i]);
      } else {
        addedList.push(playList[i]);
      }
    }
    this.playlist = [
      {
        listTitle: "创建的歌单(" + createdList.length + ")",
        playList: createdList
      },
      {
        listTitle: "收藏的歌单(" + addedList.length + ")",
        playList: addedList
      }
    ];
  }
}
