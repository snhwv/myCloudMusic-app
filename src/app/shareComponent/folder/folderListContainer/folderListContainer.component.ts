import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-folderListContainer",
  templateUrl: "./folderListContainer.component.html",
  styleUrls: ["./folderListContainer.component.scss"]
})
export class FolderListContainerComponent implements OnInit {
  folders = [
    {
      name: "downLoad",
      songNum: 12,
      path: "../../c"
    },
    {
      name: "downLoad",
      songNum: 11,
      path: "../../c"
    },
    {
      name: "downLoad",
      songNum: 112,
      path: "../../c"
    },
    {
      name: "downLoad",
      songNum: 122,
      path: "../../c"
    },
    {
      name: "downLoad",
      songNum: 127,
      path: "../../c"
    },
    {
      name: "downLoad",
      songNum: 12,
      path: "../../c"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
