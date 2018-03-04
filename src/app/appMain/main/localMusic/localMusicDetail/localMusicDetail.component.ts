import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-localMusicDetail',
  templateUrl: './localMusicDetail.component.html',
  styleUrls: ['./localMusicDetail.component.scss']
})
export class LocalMusicDetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
