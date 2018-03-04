import { Component, OnInit, ViewChild, Renderer2 } from "@angular/core";
import { SongPlayService } from "../../songPlay.service";
import { Location } from "@angular/common";
@Component({
  selector: "app-songPlay",
  templateUrl: "./songPlay.component.html",
  styleUrls: ["./songPlay.component.scss"]
})
export class SongPlayComponent implements OnInit {
  @ViewChild("imgContainer") imgContainer;
  @ViewChild("xChild") xChild;
  @ViewChild("yChild") yChild;
  @ViewChild("zChild") zChild;
  @ViewChild("lyricPanel") lyricPanel;
  nextType;
  song;
  palying;
  imgContainers = [];
  imgs = [];
  oldImg;
  playMode = "list";
  lyrics;
  disc = true;
  currentTime = 0;
  lyricType;
  lyricIndex = 0;
  lyricPanelHeight;
  constructor(
    private location: Location,
    private render: Renderer2,
    private songPlayService: SongPlayService
  ) {}

  ngOnInit() {
    this.lyricPanelHeight = this.lyricPanel.nativeElement.clientHeight;
    this.render.setStyle(
      this.lyricPanel.nativeElement,
      "padding",
      this.lyricPanelHeight / 2 + "px" + " 0px"
    );
    this.playMode = this.songPlayService.getPlayModeStatic();
    this.song = this.songPlayService.getbottomControlSong();
    this.oldImg = this.songPlayService.getbottomControlSong().al.picUrl;
    this.songPlayService.getPlaySong().subscribe(song => {
      this.song = song;
      if (this.imgContainers) {
        this.render.setProperty(
          this.imgContainers[1].querySelector("img"),
          "src",
          song.al.picUrl + "?param=190y190"
        );
      }
      this.songPlayService.getSongLyric().subscribe(re => {
        this.lyricIndex = 0;
        this.setLyric(re);
      });
    });
    this.setLyric(this.songPlayService.getLyricStatic());
    this.currentTime = this.songPlayService.getCurrentTimeStatic();

    this.songPlayService.getCurrentTime().subscribe(currentTime => {
      this.currentTime = currentTime;
      this.scrollLyric();
    });
    this.palying = this.songPlayService.getPlayStateStatic();
    this.songPlayService.getPlayState().subscribe(palying => {
      this.palying = palying;
    });
    this.songPlayService.getThreeImgs().subscribe((imgs: any[]) => {
      this.imgs = imgs;
    });
    this.songPlayService.setThreeImgs();
    this.setListener();
  }
  scrollLyric() {
    if (this.lyricType === 0 || this.lyricIndex === this.lyrics.length - 1) {
      return;
    }
    const lyricPanelNative = this.lyricPanel.nativeElement;
    const ps = lyricPanelNative.getElementsByTagName("div");
    const white = lyricPanelNative.getElementsByClassName("white-text");
    for (let i = 0; i < this.lyrics.length; i++) {
      if (this.currentTime === this.lyrics[i].time) {
        if (this.lyricIndex !== i) {
          white.length > 0
            ? this.render.removeClass(white[0], "white-text")
            : "";
          this.render.addClass(ps[i], "white-text");
          this.lyricIndex = i;
          lyricPanelNative.scrollTop =
            ps[i].offsetTop - this.lyricPanelHeight / 2;
        }
        break;
      }
      // if (
      //   this.lyricIndex !== i &&
      //   this.currentTime >= this.lyrics[i].time &&
      //   i + 1 !== this.lyrics.length &&
      //   this.currentTime < this.lyrics[i + 1].time
      // ) {
      //   this.render.removeClass(white[0], "white-text");
      //   this.render.addClass(ps[i], "white-text");
      //   this.lyricIndex = i;
      //   break;
      // } else if (
      //   this.currentTime >= this.lyrics[this.lyrics.length - 2].time &&
      //   i + 1 === this.lyrics.length
      // ) {
      //   this.render.removeClass(white[0], "white-text");
      //   this.render.addClass(ps[i], "white-text");
      //   this.lyricIndex = i;
      // }
    }
  }
  changeContent() {
    this.disc = !this.disc;
  }
  setLyricP(l, t?) {
    const lyricPanelNative = this.lyricPanel.nativeElement;
    const ps = lyricPanelNative.getElementsByTagName("div");
    for (let i = 0; i < ps.length; i++) {
      this.render.removeChild(lyricPanelNative, ps[i]);
    }
    const arrl = l.split(/[↵\n\t]/);
    let time;
    let timePattern;
    let pattern;
    // tslint:disable-next-line:prefer-const
    let lyrics = [];
    let lyric;
    let TP;
    for (let i = 0; i < arrl.length; i++) {
      time = arrl[i].match(/\[\d{2}:\d{2}\.\d{2,3}\]/);
      if (time !== null && t !== null && t !== undefined) {
        // 有翻译
        time = time[0];
        timePattern =
          "\\" +
          time.substring(0, time.lastIndexOf("]")) +
          "\\" +
          time.slice(time.lastIndexOf("]"));
        pattern = new RegExp("(?<=" + timePattern + ").*?(?=[↵\n\t])");
        TP = t.match(pattern);
        if (TP !== null) {
          TP = TP[0];
          lyric = {
            time:
              // tslint:disable-next-line:radix
              parseInt(time.substr(1, 2)) * 60 + parseInt(time.substr(4, 2)),
            lyric: arrl[i].replace(/\[\d{2}:\d{2}\.\d{2,3}\]/, ""),
            tlyric: TP
          };
          lyrics.push(lyric);
        }
      } else if (time !== null) {
        // 无翻译
        time = time[0];
        lyric = {
          time: parseInt(time.substr(1, 2)) * 60 + parseInt(time.substr(4, 2)),
          lyric: arrl[i].replace(/\[\d{2}:\d{2}\.\d{2,3}\]/, "")
        };
        lyrics.push(lyric);
      }
    }
    for (let j = 0; j < lyrics.length; j++) {
      const Pcontiner = this.render.createElement("div");
      const p = this.render.createElement("p");
      const text = this.render.createText(lyrics[j].lyric);
      this.render.addClass(p, "p");
      this.render.appendChild(p, text);
      this.render.appendChild(Pcontiner, p);
      if (lyrics[j].tlyric) {
        const tp = this.render.createElement("p");
        const tText = this.render.createText(lyrics[j].tlyric);
        this.render.addClass(tp, "p");
        this.render.appendChild(tp, tText);
        this.render.appendChild(Pcontiner, tp);
      }
      this.render.appendChild(lyricPanelNative, Pcontiner);
    }
    this.lyrics = lyrics;
    console.log(this.lyrics);
    this.scrollLyric();
  }
  setLyric(lyric: any) {
    const lyricPanelNative = this.lyricPanel.nativeElement;
    if ("nolyric" in lyric) {
      if (lyric.nolyric === false) {
        return;
      }
      const p = this.render.createElement("div");
      const text = this.render.createText("纯音乐 请欣赏");
      this.render.appendChild(p, text);
      this.render.appendChild(lyricPanelNative, p);
      this.lyricType = 0;
    } else if (
      lyric.tlyric.lyric !== undefined &&
      lyric.tlyric.lyric !== null
    ) {
      this.setLyricP(lyric.lrc.lyric, lyric.tlyric.lyric);
      console.log("外");
    } else {
      this.setLyricP(lyric.lrc.lyric);
      console.log("中");
    }
  }
  setListener() {
    const imgContainerNative = this.imgContainer.nativeElement;
    const xChildNative = this.xChild.nativeElement;
    const yChildNative = this.yChild.nativeElement;
    const zChildNative = this.zChild.nativeElement;
    this.imgContainers = [xChildNative, yChildNative, zChildNative];
    this.reSetPosition();
    let startX;
    const imgWidth = yChildNative.clientWidth;
    this.render.listen(imgContainerNative, "touchstart", event => {
      if (event.changedTouches.length !== 1) {
        return;
      }
      const touch = event.changedTouches[0];
      startX = touch.pageX;
      this.render.setProperty(
        this.imgContainers[0].querySelector("img"),
        "src",
        this.imgs[0] + "?param=190y190"
      );
      this.render.setProperty(
        this.imgContainers[1].querySelector("img"),
        "src",
        this.imgs[1] + "?param=190y190"
      );
      this.render.setProperty(
        this.imgContainers[2].querySelector("img"),
        "src",
        this.imgs[2] + "?param=190y190"
      );
      this.render.setStyle(this.imgContainers[0], "transition-duration", "0s");
      this.render.setStyle(this.imgContainers[1], "transition-duration", "0s");
      this.render.setStyle(this.imgContainers[2], "transition-duration", "0s");
    });
    this.render.listen(imgContainerNative, "touchmove", event => {
      if (event.changedTouches.length !== 1) {
        return;
      }
      const touch = event.changedTouches[0];
      const offSetX = touch.pageX - startX;
      this.render.setStyle(
        this.imgContainers[0],
        "left",
        -imgWidth + offSetX + "px"
      );
      this.render.setStyle(this.imgContainers[1], "left", offSetX + "px");
      this.render.setStyle(
        this.imgContainers[2],
        "left",
        imgWidth + offSetX + "px"
      );
    });
    this.render.listen(imgContainerNative, "touchend", event => {
      if (event.changedTouches.length !== 1) {
        return;
      }
      const touch = event.changedTouches[0];
      const offSetX = touch.pageX - startX;
      if (offSetX <= -imgWidth / 2) {
        this.songPlayService.nextSong("next");
        const nextImg = this.imgContainers.shift();
        this.imgContainers.push(nextImg);
        this.render.setStyle(
          this.imgContainers[0],
          "transition-duration",
          "0.5s"
        );
        this.render.setStyle(
          this.imgContainers[1],
          "transition-duration",
          "0.5s"
        );
        this.reSetPosition();
        // this.songPlayService.setThreeImgs();
      } else if (offSetX >= imgWidth / 2) {
        // prev
        this.songPlayService.nextSong("prev");
        const prevImg = this.imgContainers.pop();
        this.imgContainers.unshift(prevImg);
        this.render.setStyle(
          this.imgContainers[1],
          "transition-duration",
          "0.5s"
        );
        this.render.setStyle(
          this.imgContainers[2],
          "transition-duration",
          "0.5s"
        );
        this.reSetPosition();
        // this.songPlayService.setThreeImgs();
      } else {
        this.render.setStyle(
          this.imgContainers[0],
          "transition-duration",
          "0.5s"
        );
        this.render.setStyle(
          this.imgContainers[1],
          "transition-duration",
          "0.5s"
        );
        this.render.setStyle(
          this.imgContainers[2],
          "transition-duration",
          "0.5s"
        );
        this.reSetPosition();
      }
    });
  }
  reSetPosition() {
    this.render.setStyle(this.imgContainers[0], "left", "-100%");
    this.render.setStyle(this.imgContainers[1], "left", "0px");
    this.render.setStyle(this.imgContainers[2], "left", "100%");
  }
  changSong(control) {
    this.songPlayService.nextSong(control);
  }
  controlBtnClicked() {
    this.palying = !this.palying;
    this.songPlayService.setPlayState(this.palying);
  }
  setPlayMode() {
    this.playMode =
      this.playMode === "single"
        ? "random"
        : this.playMode === "random" ? "list" : "single";
    console.log(this.playMode);
    this.songPlayService.setplayMode(this.playMode);
  }
  goBack(): void {
    this.location.back();
  }
}
