import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songListContainer',
  templateUrl: './songListContainer.component.html',
  styleUrls: ['./songListContainer.component.scss']
})
export class SongListContainerComponent implements OnInit {
  songs = [
    {
      id: "sd",
      name: "Bye Bye Bye",
      artist: "Lovestoned",
      album: "Rising Love",
      hasMv: false,
      sq: false,
      downloaded: false
    },
    {
      id: "sd",
      name: "Bye Bye Bye",
      artist: "Lovestoned",
      album: "Rising Love",
      hasMv: false,
      sq: false,
      downloaded: false
    },
    {
      id: "sd",
      name: "Bye Bye Bye",
      artist: "Lovestoned",
      album: "Rising Love",
      hasMv: false,
      sq: false,
      downloaded: false
    },
    {
      id: "sd",
      name: "Bye Bye Bye",
      artist: "Lovestoned",
      album: "Rising Love",
      hasMv: false,
      sq: false,
      downloaded: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
