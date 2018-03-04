// import { song_operation } from "./../datas/operation/song_operation";
import { Injectable } from "@angular/core";
import { song_operation } from "../../../datas/operation/song_operation";
// import { userRoomDatas } from './../data';
@Injectable()
export class SongService {
  operation;
  constructor() {
    // {
    //     icon: "add_box",
    //     title: "下一首播放",
    //     clickActionType: "redirect",
    //     action: "../../../sheetManage"
    //   },
    this.operation = song_operation;
    this.operation.splice(1, 1);
    console.log(this.operation);
  }
  deleteOperation = [];
  resetOperation(song: any) {
    // 是否收藏
    song.isCollectioned ? "" : (this.deleteOperation[13] = null);
    // 是否收藏
    song.hasMv ? "" : (this.deleteOperation[13] = null);
    // 是否收藏
    song.isCollectioned ? "" : (this.deleteOperation[13] = null);
    // 是否收藏
    song.isCollectioned ? "" : (this.deleteOperation[13] = null);
    // 是否收藏
    song.isCollectioned ? "" : (this.deleteOperation[13] = null);
  }
  openDialog(song: any) {}
}
