import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: 'app-newSongSheetDialog',
  templateUrl: './newSongSheetDialog.component.html',
  styleUrls: ['./newSongSheetDialog.component.scss']
})
export class NewSongSheetDialogComponent implements OnInit {
  songSheetName;
  privacy;
  constructor( public dialogRef: MatDialogRef<NewSongSheetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
