import { Injectable } from "@angular/core";
import { ajax, ajaxSettings } from "jquery";
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpRequest
} from "@angular/common/http";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/concatMap";
import "rxjs/add/observable/of";
@Injectable()
export class CloudMusicService {
  private headers = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  });
  private user;
  private playlist = [];
  private userId = 477944154;
  constructor(private http: HttpClient, private http1: Http) {
    // this.phoneLogin("17772450369", "yang20050116..");
  }
  request(method: string, url: string, data?: any): Observable<any> {
    return this.http.request(method, "/api/" + url, {
      body: data.body,
      params: data.params
    });
  }
  phoneLogin(phone: string, password: string) {
    const url = "login/cellphone";
    const params = new HttpParams()
      .set("phone", phone)
      .set("password", password);
    this.request("GET", url, { params: params }).subscribe(result => {
      this.user = result;
      console.log(this.user.profile.userId);
    });
  }
  // 获取用户详细信息
  userDetail() {
    const url = "user/detail";
    const params = new HttpParams().set("uid", this.userId.toString());
    this.request("GET", url, { params: params }).subscribe(result => {
      console.log(result);
    });
  }
  // 获取用户订阅（只包含数量）
  getUserSubcount(): Promise<any> {
    const url = "user/subcount";
    return this.request("GET", url, { body: null, params: null }).toPromise();
  }
  getUserPlayList(): Promise<any> {
    const url = "user/playlist";
    const params = new HttpParams().set("uid", this.userId.toString());
    return this.request("GET", url, { body: null, params: params })
      .toPromise()
      .then(re => re.playlist);
  }
  // 获取用户电台
  getSubedStation(): Promise<any> {
    const url = "user/dj";
    const params = new HttpParams().set("uid", this.userId.toString());
    return this.request("GET", url, { body: null, params: params }).toPromise();
  }
  // 获取播放记录
  getPlayRecord() {
    const url = "user/record";
    const params = new HttpParams()
      .set("uid", this.userId.toString())
      .set("type", "0");
    return this.request("GET", url, { body: null, params: params })
      .toPromise()
      .then(re => console.log(re));
  }
  // 歌单详细信息，包含歌曲信息
  getPlayListDetail(songSheetId: string): Promise<any> {
    const url = "playlist/detail";
    const params = new HttpParams().set("id", songSheetId);
    return this.request("GET", url, { body: null, params: params }).toPromise();
  }
  // 获取歌曲详细信息
  getSongDetail(songId: number): Observable<any> {
    const url = "song/detail";
    const params = new HttpParams().set("ids", songId.toString());
    return this.request("GET", url, { body: null, params: params });
  }
  // 获取电台节目列表
  getRadioStationDetail(radioStaionId: number): Observable<any> {
    const url = "dj/program";
    const params = new HttpParams().set("rid", radioStaionId.toString());
    return this.request("GET", url, { body: null, params: params });
  }
  // 获取歌词
  getLyric(songId: number) {
    const url = "lyric";
    const params = new HttpParams().set("id", songId.toString());
    return this.request("GET", url, { body: null, params: params });
  }
  // 获取用户动态
  getEvent() {
    const url = "event";
    return this.request("GET", url, { body: null, params: null });
  }
  // 获取用户动态中的视频
  getEventVideoUrl(eventId: number, userId: number) {
    const url = "event/video";
    const params = new HttpParams()
      .set("eid", eventId.toString())
      .set("uid", userId.toString());
    return this.request("GET", url, { body: null, params: params });
  }
  // 获取音乐播放URL
  getSongUrl(songId: string) {
    const url = "music/url";
    const params = new HttpParams().set("id", songId);
    return this.request("GET", url, { body: null, params: params }).map(re => {
      let musicUrl = "";
      if (re.data[0].code === 200) {
        musicUrl = re.data[0].url;
      }
      return musicUrl;
    });
  }
  // 获取评论
  getComment(id: number, type: string): Observable<any> {
    const url = `comment/${type}`;
    const params = new HttpParams().set("id", id + "");
    return this.request("GET", url, { body: null, params: params });
  }
  // 获取banner图片
  getBanner(): Observable<any> {
    const url = `banner`;
    return this.request("GET", url, { body: null, params: null });
  }
  // 获取推荐歌单
  getRecommendSongSheet(): Observable<any> {
    const url = `personalized`;
    return this.request("GET", url, { body: null, params: null });
  }
  // 获取每日推荐歌单
  getRecommendSongSheetDaily(): Observable<any> {
    const url = `/recommend/resource`;
    return this.request("GET", url, { body: null, params: null });
  }
  // 获取独家放送
  getPrivateContent(): Observable<any> {
    const url = `personalized/privatecontent`;
    return this.request("GET", url, { body: null, params: null });
  }
  // 获取最新音乐
  getNewSong(): Observable<any> {
    const url = `personalized/newsong`;
    return this.request("GET", url, { body: null, params: null });
  }
  // 获取新碟
  getNewAlbum(offset, limit): Observable<any> {
    const url = `top/album`;
    const params = new HttpParams()
      .set("offset", offset + "")
      .set("limit", limit + "");
    return this.request("GET", url, { body: null, params: null });
  }
  // 获取推荐MV
  getRecommendMV(): Observable<any> {
    const url = `/personalized/mv`;
    return this.request("GET", url, { body: null, params: null });
  }
  // 获取推荐电台
  getRecommendStation(): Observable<any> {
    const url = `/personalized/djprogram`;
    return this.request("GET", url, { body: null, params: null });
  }
  getUser(): any {
    return this.userId;
  }
}
