import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistListContainer',
  templateUrl: './artistListContainer.component.html',
  styleUrls: ['./artistListContainer.component.scss']
})
export class ArtistListContainerComponent implements OnInit {
  artists=[
    {
      name:"陈一发儿",
      listImg:"http://placehold.it/50x50",
      songNum:1
  },
  {
    name:"陈一发儿",
    listImg:"http://placehold.it/50x50",
    songNum:2
},
{
  name:"陈一发儿",
  listImg:"http://placehold.it/50x50",
  songNum:4
},
{
  name:"陈一发儿",
  listImg:"http://placehold.it/50x50",
  songNum:10
},
{
  name:"陈一发儿",
  listImg:"http://placehold.it/50x50",
  songNum:1
},
{
  name:"陈一发儿",
  listImg:"http://placehold.it/50x50",
  songNum:1
},{
  name:"陈一发儿",
  listImg:"http://placehold.it/50x50",
  songNum:1
}
];
  constructor() { }

  ngOnInit() {
  }

}
