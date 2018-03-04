import { RecommendComponent } from './shareComponent/recommend/recommend.component';
import { CategoryVideoComponent } from './appMain/main/userRoom/category/categoryVideo/categoryVideo.component';
import { CategoryMusicComponent } from './appMain/main/userRoom/category/categoryMusic/categoryMusic.component';
import { EventComponent } from './appMain/main/userRoom/topic/event/event.component';
import { SongCommentComponent } from './appMain/songComment/songComment.component';
import { PlaySongListComponent } from './appMain/songPlay/playSongList/playSongList.component';
import { SongPlayComponent } from './appMain/songPlay/songPlay.component';
import { SongPlayService } from "./songPlay.service";
import { ScrollFadeDirective } from "./directive/scrollFade.directive";
import { NumTurnerPipe } from "./pipe/numTurner.pipe";
// import { SongService } from './barService/song.service';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { CloudMusicService } from "./cloudMusic.service";
import { RoutingModule } from "./routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";
import { MaterializeModule } from "./materialize.module";
import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./appMain/main/userRoom/topBar/topBar.component";
import { PageNotFoundComponent } from "./shareComponent/pageNotFound/pageNotFound.component";
import { UserRoomComponent } from "./appMain/main/userRoom/userRoom.component";
import { BottomBarComponent } from "./appMain/main/bottomBar/bottomBar.component";
import { MainComponent } from "./appMain/main/main.component";
import { CategoryComponent } from "./appMain/main/userRoom/category/category.component";
import { TopicComponent } from "./appMain/main/userRoom/topic/topic.component";
import { ListToggleDirective } from "./listToggle.directive";
import { UserListContainerComponent } from "./appMain/main/userRoom/userDashboard/userListContainer/userListContainer.component";
import { ChooseDialogComponent } from "./dialogComponent/chooseDialog/chooseDialog.component";
import { ListDialogComponent } from "./dialogComponent/listDialog/listDialog.component";
import { NewSongSheetDialogComponent } from "./dialogComponent/newSongSheetDialog/newSongSheetDialog.component";
import { ManageSongSheetComponent } from "./appMain/manageSongSheet/manageSongSheet.component";
import { ListComponent } from "./shareComponent/songSheet/list/list.component";
import { UserNavComponent } from "./appMain/main/userRoom/topBar/userNav/userNav.component";
import { UserDashboardComponent } from "./appMain/main/userRoom/userDashboard/userDashboard.component";
import { SongSheetComponent } from "./appMain/main/songSheet/songSheet.component";
import { SongComponent } from "./shareComponent/song/song/song.component";
import { BarIconComponent } from "./shareComponent/barIcon/barIcon.component";
import { SongListComponent } from "./shareComponent/song/songList/songList.component";
import { LocalMusicComponent } from "./appMain/main/localMusic/localMusic.component";
import { ArtistComponent } from "./shareComponent/artist/artist/artist.component";
import { AlbumComponent } from "./shareComponent/album/album/album.component";
import { FolderComponent } from "./shareComponent/folder/folder/folder.component";
import { SongListContainerComponent } from "./shareComponent/song/songListContainer/songListContainer.component";
import { ArtistListContainerComponent } from "./shareComponent/artist/artistListContainer/artistListContainer.component";
import { AlbumListContainerComponent } from "./shareComponent/album/albumListContainer/albumListContainer.component";
import { FolderListContainerComponent } from "./shareComponent/folder/folderListContainer/folderListContainer.component";
import { LocalMusicDetailComponent } from "./appMain/main/localMusic/localMusicDetail/localMusicDetail.component";
import { RecentlyPlayedComponent } from "./appMain/main/recentlyPlayed/recentlyPlayed.component";
import { DownloadManageComponent } from "./appMain/main/downloadManage/downloadManage.component";
import { VideoListContainerComponent } from "./shareComponent/video/videoListContainer/videoListContainer.component";
import { DownloadingListContainerComponent } from "./shareComponent/download/downloadingListContainer/downloadingListContainer.component";
// tslint:disable-next-line:max-line-length
import { RadioStationListContainerComponent } from "./shareComponent/radioStation/radioStationListContainer/radioStationListContainer.component";
import { RadioStationComponent } from "./shareComponent/radioStation/radioStation/radioStation.component";
// import { RadioStationRecommendComponent } from "./shareComponent/radioStation/radioStationRecommend/radioStationRecommend.component";
import { coverComponent } from "./shareComponent/cover/cover.component";
import { MyRadioStationComponent } from "./appMain/main/myRadioStation/myRadioStation.component";
import { MyCollectionComponent } from "./appMain/main/myCollection/myCollection.component";
import { ProgramComponent } from "./shareComponent/program/program/program.component";
import { ProgramListContainerComponent } from "./shareComponent/program/programListContainer/programListContainer.component";
import { SongService } from "./shareComponent/barIcon/barService/song.service";
import { SongSheetSearchComponent } from "./appMain/main/songSheet/songSheetSearch/songSheetSearch.component";
import { SongSheetSearchService } from "./appMain/main/songSheet/songSheetSearch/songSheetSearch.service";
import { SliderComponent } from './appMain/songPlay/slider/slider.component';
import { MusicTimePipe } from './pipe/musicTime.pipe';
import { CommentService } from './comment.service';
import { UserCommentComponent } from './shareComponent/userComment/userComment.component';
import { CategoryRadioStationComponent } from './appMain/main/userRoom/category/categoryRadioStation/categoryRadioStation.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PageNotFoundComponent,
    UserRoomComponent,
    BottomBarComponent,
    MainComponent,
    CategoryComponent,
    TopicComponent,
    ListToggleDirective,
    UserListContainerComponent,
    ChooseDialogComponent,
    ListDialogComponent,
    NewSongSheetDialogComponent,
    ManageSongSheetComponent,
    ListComponent,
    UserNavComponent,
    UserDashboardComponent,
    SongSheetComponent,
    SongComponent,
    BarIconComponent,
    SongListComponent,
    LocalMusicComponent,
    ArtistComponent,
    AlbumComponent,
    FolderComponent,
    SongListContainerComponent,
    ArtistListContainerComponent,
    AlbumListContainerComponent,
    FolderListContainerComponent,
    LocalMusicDetailComponent,
    RecentlyPlayedComponent,
    DownloadManageComponent,
    VideoListContainerComponent,
    DownloadingListContainerComponent,
    RadioStationListContainerComponent,
    RadioStationComponent,
    MyRadioStationComponent,
    coverComponent,
    MyCollectionComponent,
    ProgramComponent,
    ProgramListContainerComponent,
    // PIPE
    NumTurnerPipe,
    MusicTimePipe,
    // DIRECTIVE
    ScrollFadeDirective,
    SongSheetSearchComponent,
    SongPlayComponent,
    SliderComponent,
    PlaySongListComponent,
    SongCommentComponent,
    UserCommentComponent,
    EventComponent,

    CategoryMusicComponent,
    CategoryVideoComponent,
    CategoryRadioStationComponent,
    RecommendComponent
  ],
  entryComponents: [
    ListDialogComponent,
    ChooseDialogComponent,
    NewSongSheetDialogComponent
  ],
  imports: [
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    MaterializeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    SwiperModule
  ],
  providers: [
    CloudMusicService,
    SongService,
    SongSheetSearchService,
    SongPlayService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
