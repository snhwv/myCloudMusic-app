import { SongCommentComponent } from './appMain/songComment/songComment.component';
import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./appMain/main/main.component";
import { SongSheetComponent } from "./appMain/main/songSheet/songSheet.component";
import { LocalMusicDetailComponent } from "./appMain/main/localMusic/localMusicDetail/localMusicDetail.component";
import { LocalMusicComponent } from "./appMain/main/localMusic/localMusic.component";
import { SongListContainerComponent } from "./shareComponent/song/songListContainer/songListContainer.component";
import { ArtistListContainerComponent } from "./shareComponent/artist/artistListContainer/artistListContainer.component";
import { AlbumListContainerComponent } from "./shareComponent/album/albumListContainer/albumListContainer.component";
import { FolderListContainerComponent } from "./shareComponent/folder/folderListContainer/folderListContainer.component";
import { RecentlyPlayedComponent } from "./appMain/main/recentlyPlayed/recentlyPlayed.component";
import { DownloadManageComponent } from "./appMain/main/downloadManage/downloadManage.component";
// tslint:disable-next-line:max-line-length
import { RadioStationListContainerComponent } from "./shareComponent/radioStation/radioStationListContainer/radioStationListContainer.component";
import { VideoListContainerComponent } from "./shareComponent/video/videoListContainer/videoListContainer.component";
import { DownloadingListContainerComponent } from "./shareComponent/download/downloadingListContainer/downloadingListContainer.component";
import { MyRadioStationComponent } from "./appMain/main/myRadioStation/myRadioStation.component";
import { MyCollectionComponent } from "./appMain/main/myCollection/myCollection.component";
import { ProgramListContainerComponent } from "./shareComponent/program/programListContainer/programListContainer.component";
import { AppComponent } from "./app.component";
import { ManageSongSheetComponent } from "./appMain/manageSongSheet/manageSongSheet.component";
import { PageNotFoundComponent } from "./shareComponent/pageNotFound/pageNotFound.component";
import { TopicComponent } from "./appMain/main/userRoom/topic/topic.component";
import { CategoryComponent } from "./appMain/main/userRoom/category/category.component";
import { UserDashboardComponent } from "./appMain/main/userRoom/userDashboard/userDashboard.component";
import { UserRoomComponent } from "./appMain/main/userRoom/userRoom.component";
import { SongSheetSearchComponent } from "./appMain/main/songSheet/songSheetSearch/songSheetSearch.component";
import { SongPlayComponent } from "./appMain/songPlay/songPlay.component";
// import { MyRadioStationComponent } from './myRadioStation/myRadioStation.component';
// import { MyCollectionComponent } from './myCollection/myCollection.component';

const routes: Routes = [
  {
    path: "cloudMusic",
    component: MainComponent,
    children: [
      {
        path: "songSheet/:id",
        component: SongSheetComponent
      },
      {
        path: "songSheetSearch",
        component: SongSheetSearchComponent
      },
      {
        path: "localMusicDetail",
        component: LocalMusicDetailComponent
      },
      {
        path: "localMusic",
        component: LocalMusicComponent,
        children: [
          {
            path: "song",
            component: SongListContainerComponent
          },
          {
            path: "artist",
            component: ArtistListContainerComponent
          },
          {
            path: "album",
            component: AlbumListContainerComponent
          },
          {
            path: "folder",
            component: FolderListContainerComponent
          }
        ]
      },
      {
        path: "recentlyPlayed",
        component: RecentlyPlayedComponent
      },
      {
        path: "downloadManage",
        component: DownloadManageComponent,
        children: [
          {
            path: "song",
            component: SongListContainerComponent
          },
          {
            path: "radioStation",
            component: RadioStationListContainerComponent
          },
          {
            path: "video",
            component: VideoListContainerComponent
          },
          {
            path: "downloading",
            component: DownloadingListContainerComponent
          }
        ]
      },
      {
        path: "myRadioStation",
        component: MyRadioStationComponent
      },
      {
        path: "myCollection",
        component: MyCollectionComponent,
        children: [
          {
            path: "album",
            component: AlbumListContainerComponent
          },
          {
            path: "artist",
            component: ArtistListContainerComponent
          },
          {
            path: "video",
            component: VideoListContainerComponent
          },
          {
            path: "program",
            component: ProgramListContainerComponent
          }
        ]
      },
      {
        path: "userRoom",
        component: UserRoomComponent,
        children: [
          {
            path: "dashboard",
            component: UserDashboardComponent
          },
          {
            path: "category",
            component: CategoryComponent
          },
          {
            path: "topics",
            component: TopicComponent
          }
        ]
      }
    ]
  },
  {
    path: "search",
    component: AppComponent
  },
  {
    path: "sheetManage",
    component: ManageSongSheetComponent
  },
  {
    path: "songPlay",
    component: SongPlayComponent
  },
  {
    path: "songComment",
    component: SongCommentComponent
  },
  { path: "", redirectTo: "cloudMusic/userRoom/dashboard", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes) /*,{'useHash': true}*/],
  exports: [RouterModule]
})
export class RoutingModule {}
