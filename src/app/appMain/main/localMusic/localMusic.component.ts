import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-localMusic',
  templateUrl: './localMusic.component.html',
  styleUrls: ['./localMusic.component.scss']
})
export class LocalMusicComponent implements OnInit {
  
  

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }

}
