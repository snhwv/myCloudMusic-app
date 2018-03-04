import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: 'app-listDialog',
  templateUrl: './listDialog.component.html',
  styleUrls: ['./listDialog.component.scss']
})
export class ListDialogComponent implements OnInit {
  result;
  lists;
  constructor(
    public dialogRef: MatDialogRef<ListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.lists = this.data.list;
  }
  onNoClick(): void {
    this.dialogRef.close(this.result);
  }
  listClicked(index: number) {
    const clickedList = this.lists.data[index];
    if (clickedList.clickAction === "dialog") {
      this.result = {
        actionName: "dialog",
        action: clickedList.nextDialog
      };
    } else if (clickedList.clickAction === "redirect") {
      this.result = {
        actionName: "redirect",
        action: clickedList.link
      };
    }
    this.onNoClick();
  }
}
