import { ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ParamMap, ActivatedRoute } from "@angular/router";
import { SongSheetSearchService } from "./songSheetSearch.service";
import { Observable } from "rxjs/Observable";
import { SongPlayService } from "../../../../songPlay.service";
import "rxjs/add/operator/auditTime";
@Component({
  selector: "app-songSheetSearch",
  templateUrl: "./songSheetSearch.component.html",
  styleUrls: ["./songSheetSearch.component.scss"]
})
export class SongSheetSearchComponent implements OnInit {
  @ViewChild("search") searchInput;
  constructor(
    private route: ActivatedRoute,
    private songSheetSearchService: SongSheetSearchService,
    private location: Location,
    private songPlayService: SongPlayService
  ) {}
  songs;
  value;
  bgImg;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bgImg = params.bgImg;
    });
    const valueChange = Observable.fromEvent(
      this.searchInput.nativeElement,
      "keyup"
    );
    valueChange.debounceTime(1000).subscribe((re: any) => {
      console.log(re.target.value);
      this.search(re.target.value);
    });
  }
  insertList(song: any) {
    // 把song插入到播放列表中
    console.log(song);
    this.songPlayService.insertSongToList(song);
  }
  search(searchText: string) {
    this.songs = this.songSheetSearchService.search(searchText);
  }
  goBack(): void {
    this.location.back();
  }
}
