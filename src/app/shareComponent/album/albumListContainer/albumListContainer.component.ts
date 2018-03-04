import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-albumListContainer",
  templateUrl: "./albumListContainer.component.html",
  styleUrls: ["./albumListContainer.component.scss"]
})
export class AlbumListContainerComponent implements OnInit {
  albums = [
    {
      name: "Fire",
      listImg: "http://placehold.it/50x50",
      songNum: 23,
      artistName: "陈一发儿"
    },
    {
      name: "Fire",
      listImg: "http://placehold.it/50x50",
      songNum: 21,
      artistName: "陈一发儿"
    },
    {
      name: "Fire",
      listImg: "http://placehold.it/50x50",
      songNum: 3,
      artistName: "陈一发儿"
    },
    {
      name: "Fire",
      listImg: "http://placehold.it/50x50",
      songNum: 54,
      artistName: "陈一发儿"
    },
    {
      name: "Fire",
      listImg: "http://placehold.it/50x50",
      songNum: 23,
      artistName: "陈一发儿"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
