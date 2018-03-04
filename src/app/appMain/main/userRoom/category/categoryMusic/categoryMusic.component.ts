import { Component, OnInit } from "@angular/core";
import { CloudMusicService } from "../../../../../cloudMusic.service";

@Component({
  selector: "app-categoryMusic",
  templateUrl: "./categoryMusic.component.html",
  styleUrls: ["./categoryMusic.component.scss"]
})
export class CategoryMusicComponent implements OnInit {
  constructor(private cloudMusicService: CloudMusicService) {}
  banners;
  recommendSongSheet;
  privateContent;
  newAlbums;
  recommendMV;
  recommendStation;
  config: SwiperOptions = {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    loop: true,
    autoHeight: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
  ngOnInit() {
    this.cloudMusicService.getBanner().subscribe(re => {
      this.banners = re.banners;
    });
    this.cloudMusicService.getRecommendSongSheet().subscribe(re => {
      console.log(re);
      this.recommendSongSheet = re.result.slice(0,6);
      // this.recommentSongSheet = re.banners;
    });
    this.cloudMusicService.getPrivateContent().subscribe(re => {
      console.log(re);
      this.privateContent=re.result;
      // this.recommentSongSheet = re.banners;
    });
    this.cloudMusicService.getNewAlbum(0,5).subscribe(re => {
      console.log(re);
      this.newAlbums = re.albums.slice(0,6);
      // this.recommentSongSheet = re.banners;
    });
    this.cloudMusicService.getRecommendMV().subscribe(re => {
      console.log(re);
      this.recommendMV = re.result;
      // this.recommentSongSheet = re.banners;
    });
    this.cloudMusicService.getRecommendStation().subscribe(re => {
      console.log(re);
      this.recommendStation = re.result;
      // this.recommentSongSheet = re.banners;
    });
  }
}
