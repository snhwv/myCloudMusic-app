import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
@Component({
  selector: "app-manageSongSheet",
  templateUrl: "./manageSongSheet.component.html",
  styleUrls: ["./manageSongSheet.component.scss"]
})
export class ManageSongSheetComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}
  goBack(): void {
    this.location.back();
  }
}
