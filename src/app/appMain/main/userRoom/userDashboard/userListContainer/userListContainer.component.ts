// import { NewSongSheetDialogComponent } from './../newSongSheetDialog/newSongSheetDialog.component';
import { ActivatedRoute, Router } from "@angular/router";
// import { ListDialogComponent } from "./../listDialog/listDialog.component";
// import { ChooseDialogComponent } from "./../chooseDialog/chooseDialog.component";
// import { rotate } from "./../animations/rotate";
import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { rotate } from "../../../../../animations/rotate";
import { ListDialogComponent } from "../../../../../dialogComponent/listDialog/listDialog.component";
import { ChooseDialogComponent } from "../../../../../dialogComponent/chooseDialog/chooseDialog.component";
import { NewSongSheetDialogComponent } from "../../../../../dialogComponent/newSongSheetDialog/newSongSheetDialog.component";

@Component({
  selector: "app-userListContainer",
  templateUrl: "./userListContainer.component.html",
  styleUrls: ["./userListContainer.component.scss"],
  animations: [rotate]
})
export class UserListContainerComponent implements OnInit {
  @Input() data;
  state = "inactive";
  hidden = false;
  constructor(public dialog: MatDialog, public router: Router, public route: ActivatedRoute) {}
  ngOnInit() {
  }
  // openListDialog(): void {
  //   console.log(this.data.dialogList);
  //   const c = ListDialogComponent;
  //   const dialogRef = this.dialog.open(c, {
  //     maxWidth: "100%",
  //     panelClass: "dialogStyle",
  //     autoFocus: false,
  //     data: { list: this.data.dialogList }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.listDialogHandler(result);
  //   });
  // }
  // openChooseDialog() {
  //   const dialogRef = this.dialog.open(ChooseDialogComponent, {
  //     autoFocus: false,
  //     data: { mesg: "确定吗？" }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //   });
  // }
  // openNewSongSheetDialog() {
  //   const dialogRef = this.dialog.open(NewSongSheetDialogComponent, {
  //     autoFocus: true
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //   });
  // }
  // listDialogHandler(result: any) {
  //   if (!result) {
  //     return;
  //   }
  //   if (result.actionName === "dialog") {
  //     console.log("create new dialog " + result.action);
  //     switch (result.action) {
  //       case 'NewSongSheetDialog':
  //         this.openNewSongSheetDialog();
  //         break;
  //       case 'ChooseDialog':
  //         this.openChooseDialog();
  //         break;
  //       default:
  //         break;
  //     }
  //   } else if (result.actionName === "redirect") {
  //     this.router.navigate([result.action], {relativeTo: this.route});
  //   }
  // }
  toggle() {
    this.state = this.state === "inactive" ? "active" : "inactive";
    this.hidden = !this.hidden;
  }
}
