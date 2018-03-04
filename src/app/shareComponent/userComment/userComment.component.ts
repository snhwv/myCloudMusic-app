import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userComment',
  templateUrl: './userComment.component.html',
  styleUrls: ['./userComment.component.scss']
})
export class UserCommentComponent implements OnInit {

  @Input() comment;
  constructor() { }

  ngOnInit() {
  }

}
