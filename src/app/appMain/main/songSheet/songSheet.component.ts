import { Component, OnInit, ViewChild, Renderer2 } from "@angular/core";
import { Location } from "@angular/common";
import { ParamMap, ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { CloudMusicService } from "../../../cloudMusic.service";
import { SongSheetSearchService } from "./songSheetSearch/songSheetSearch.service";
declare const s: any;
@Component({
  selector: "app-songSheet",
  templateUrl: "./songSheet.component.html",
  styleUrls: ["./songSheet.component.scss"]
})
export class SongSheetComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cloudMusicService: CloudMusicService,
    private songSheetSearchService: SongSheetSearchService,
    private render: Renderer2
  ) {}
  @ViewChild("sheetContainer") sheetContainer;
  loaded = false;
  data: any;
  topBarOpacity = 0;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cloudMusicService.getPlayListDetail(params.id).then(data => {
        this.data = data;
        this.loaded = true;
        this.songSheetSearchService.setSongs(data.playlist.tracks);
      });
    });
    const sheetC = this.sheetContainer.nativeElement;
    this.render.listen(sheetC, "scroll", () => {
      if (sheetC.scrollTop < 200) {
        this.topBarOpacity = sheetC.scrollTop / 200;
      } else {
        this.topBarOpacity = 1;
      }
    });
  }
  goBack(): void {
    this.location.back();
  }
}
