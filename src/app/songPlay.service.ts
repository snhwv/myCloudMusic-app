import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { CloudMusicService } from "./cloudMusic.service";
import { Subject } from "rxjs/Subject";
// import "rxjs/add/oper";

@Injectable()
export class SongPlayService {
  playingSong = new Subject(); // 其中保存正在播放的音乐信息
  playing = new Subject(); // 播放状态
  playingSongStatic;
  totalTimeStatic;
  playingStatic: boolean;
  totalTime = new Subject();
  currentTime = new Subject();
  currentTimeStatic;
  changeCurrentTime = new Subject();

  songList = new Subject();
  songListStatic = [];
  randomSongListStatic = [];
  playingSongStaticIndex;
  playMode; // 播放模式
  threeImgs = new Subject();
  randomPlaySongIndex; // 随机播放时的index
  //   playSong = new Subject();
  lyricStatic;
  constructor(private cloudMusicService: CloudMusicService) {}
  insertSongToList(song: any) {
    const newIndex = this.getNextSongIndex("next", this.playingSongStaticIndex);
    this.songListStatic.splice(newIndex, 0, song);
    if (
      this.playingSongStaticIndex !== undefined &&
      this.playingSongStaticIndex !== null
    ) {
      this.playingSongStaticIndex = newIndex;
    } else {
      this.playingSongStaticIndex = 0;
    }
    this.setThreeImgs();
  }

  setSongList(songList: any) {
    this.songListStatic = songList;
    this.songList.next(songList);
  }
  getSongList(): Subject<any> {
    return this.songList;
  }
  getSongStatic() {
    return this.songListStatic;
  }
  getTotalTime(): Subject<any> {
    return this.totalTime;
  }
  setTotalTime(totalTime) {
    this.totalTimeStatic = totalTime;
    this.totalTime.next(totalTime);
  }
  getTotalTimeStatic(): any {
    return this.totalTimeStatic;
  }
  getCurrentTime(): Subject<any> {
    return this.currentTime;
  }
  getCurrentTimeStatic() {
    return this.currentTimeStatic;
  }
  setCurrentTime(playedTime) {
    this.currentTimeStatic = playedTime;
    this.currentTime.next(playedTime);
  }
  getChangeCurrentTime(): Subject<any> {
    return this.changeCurrentTime;
  }
  setChangeCurrentTime(changeCurrentTime) {
    this.changeCurrentTime.next(changeCurrentTime);
  }

  setPlaySong(song: any, index: number) {
    this.playingSongStaticIndex = index;
    this.playingSongStatic = song;
    this.setThreeImgs();
    this.setLyricStatic();
    this.playingSong.next(song);
  }
  getbottomControlSong(): any {
    return this.playingSongStatic;
  }
  getPlaySong(): Subject<any> {
    return this.playingSong;
  }
  setPlayState(playing: boolean) {
    this.playingStatic = playing;
    this.playing.next(playing);
  }
  getPlayState(): Subject<any> {
    return this.playing;
  }
  getPlayStateStatic(): boolean {
    return this.playingStatic;
  }
  setLyricStatic() {
    this.cloudMusicService
      .getLyric(this.playingSongStatic.id)
      .subscribe(re => (this.lyricStatic = re));
  }
  getSongLyric() {
    return this.cloudMusicService.getLyric(this.playingSongStatic.id);
  }
  getLyricStatic() {
    return this.lyricStatic;
  }
  getSongUrl(): Observable<any> {
    return this.playingSong.map((song: any) => song.id).concatMap(songId =>
      this.cloudMusicService.getSongUrl(songId.toString()).map(re => {
        if (re !== "") {
          re.replace("http://m10.music.126.net/", "/m10/");
        }
        return re;
      })
    );
  }
  setplayMode(playMode) {
    this.playMode = playMode;
    if (this.playMode === "random") {
      this.randomSongListStatic = [].concat(
        JSON.parse(JSON.stringify(this.songListStatic))
      ); // 拷贝数组,注意这行的拷贝方法
      this.randomSongListStatic.splice(this.playingSongStaticIndex, 1);
      this.randomSongListStatic.sort(function() {
        return 0.5 - Math.random();
      });
      this.randomSongListStatic.unshift(
        this.songListStatic[this.playingSongStaticIndex]
      );
      this.randomPlaySongIndex = 0;
    } else if (this.playMode === "list") {
      for (let i = 0; i < this.songListStatic.length; i++) {
        if (
          this.randomSongListStatic[this.randomPlaySongIndex].id ===
          this.songListStatic[i].id
        ) {
          this.playingSongStaticIndex = i;
        }
      }
    }
    this.setThreeImgs();
  }
  getPlayModeStatic() {
    return this.playMode;
  }
  setThreeImgs() {
    let imgs = [];
    if (
      this.playingSongStaticIndex < 0 ||
      this.playingSongStaticIndex > this.songListStatic.length - 1
    ) {
      return;
    }
    switch (this.playMode) {
      // case "single":
      //   imgs = [
      //     this.songListStatic[this.playingSongStaticIndex].al.picUrl,
      //     this.songListStatic[this.playingSongStaticIndex].al.picUrl,
      //     this.songListStatic[this.playingSongStaticIndex].al.picUrl
      //   ];
      //   break;
      case "random":
        imgs = [
          this.randomSongListStatic[
            this.getNextSongIndex("prev", this.randomPlaySongIndex)
          ].al.picUrl,
          this.randomSongListStatic[
            this.getNextSongIndex("playing", this.randomPlaySongIndex)
          ].al.picUrl,
          this.randomSongListStatic[
            this.getNextSongIndex("next", this.randomPlaySongIndex)
          ].al.picUrl
        ];
        break;
      case "list":
        imgs = [
          this.songListStatic[
            this.getNextSongIndex("prev", this.playingSongStaticIndex)
          ].al.picUrl,
          this.songListStatic[
            this.getNextSongIndex("playing", this.playingSongStaticIndex)
          ].al.picUrl,
          this.songListStatic[
            this.getNextSongIndex("next", this.playingSongStaticIndex)
          ].al.picUrl
        ];
        break;
      default:
        imgs = [
          this.songListStatic[
            this.getNextSongIndex("prev", this.playingSongStaticIndex)
          ].al.picUrl,
          this.songListStatic[
            this.getNextSongIndex("playing", this.playingSongStaticIndex)
          ].al.picUrl,
          this.songListStatic[
            this.getNextSongIndex("next", this.playingSongStaticIndex)
          ].al.picUrl
        ];
        break;
    }
    this.threeImgs.next(imgs);
  }
  getThreeImgs(): Subject<any> {
    return this.threeImgs;
  }
  nextSong(control?) {
    switch (this.playMode) {
      // case "single":
      //   this.setPlaySong(this.playingSongStatic, this.playingSongStaticIndex);
      //   break;
      case "random":
        this.nextSong_random(control);
        break;
      case "list":
        this.nextSong_list(control);
        break;
      default:
        this.nextSong_list(control);
        break;
    }
  }
  getNextSongIndex(control, oldIndex): number {
    if (control === "playing") {
      return oldIndex;
    }
    const listLength = this.songListStatic.length;
    let newIndex;
    if (oldIndex <= 0 && control === "prev") {
      newIndex = listLength - 1;
    } else if (oldIndex >= listLength - 1 && control === "next") {
      newIndex = 0;
    } else {
      control === "next"
        ? (newIndex = oldIndex + 1)
        : (newIndex = oldIndex - 1);
    }
    return newIndex;
  }
  nextSong_random(control) {
    const newIndex = this.getNextSongIndex(control, this.randomPlaySongIndex);
    this.randomPlaySongIndex = newIndex;
    this.setPlaySong(this.randomSongListStatic[newIndex], newIndex);
  }
  nextSong_list(control) {
    const newIndex = this.getNextSongIndex(
      control,
      this.playingSongStaticIndex
    );
    this.setPlaySong(this.songListStatic[newIndex], newIndex);
  }
}
