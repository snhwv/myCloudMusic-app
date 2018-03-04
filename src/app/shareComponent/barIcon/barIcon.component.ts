// import { SongService } from './../barService/song.service';
import { Component, OnInit } from "@angular/core";
import { SongService } from "./barService/song.service";

@Component({
  selector: "app-barIcon",
  templateUrl: "./barIcon.component.html",
  styleUrls: ["./barIcon.component.scss"]
})
export class BarIconComponent implements OnInit {
  type = "song"; // sheet mv artist ...
  constructor(private songService: SongService) {}
  service;
  ngOnInit() {
    switch (this.type) {
      case "song":
        this.service = this.songService;
        break;
      case "sheet":
        break;
    }
  }
  openDialog() {
    this.service.openDialog();
  }
}
