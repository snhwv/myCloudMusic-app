import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: 'app-chooseDialog',
  templateUrl: './chooseDialog.component.html',
  styleUrls: ['./chooseDialog.component.scss']
})
export class ChooseDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ChooseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
