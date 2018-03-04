import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-radioStation",
  templateUrl: "./radioStation.component.html",
  styleUrls: ["./radioStation.component.scss"]
})
export class RadioStationComponent implements OnInit {
  @Input()
  videoStation = {
    name: "陈一发儿电台",
    anchor: "陈一发儿",
    img: "http://placehold.it/50x50"
  };
  constructor() {}

  ngOnInit() {}
  openDialog() {}
}
