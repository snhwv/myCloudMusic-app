import { Injectable } from "@angular/core";

@Injectable()
export class SongSheetSearchService {
  songs;
  constructor() {}
  setSongs(data: any) {
    this.songs = data;
  }
  search(searchText: string) {
    if (searchText === "" || searchText === null || searchText === undefined) {
      return;
    }
    let newSongs = [];
    for (let i = 0; i < this.songs.length; i++) {
      let artistName = null;
      for (let j = 0; j < this.songs[i].ar.length; j++) {
        artistName += this.songs[i].ar[j].name + " ";
      }
      let song =
        this.songs[i].name + " " + this.songs[i].al.name + " " + artistName;
      if (song.search(new RegExp(searchText, "i")) !== -1) {
        newSongs.push(this.songs[i]);
      }
    }
    return newSongs;
  }
}
