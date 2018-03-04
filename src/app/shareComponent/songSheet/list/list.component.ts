import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
// import { ListDialogComponent } from "../listDialog/listDialog.component";
import { ActivatedRoute, Router } from "@angular/router";
import { ListDialogComponent } from "../../../dialogComponent/listDialog/listDialog.component";
import { ChooseDialogComponent } from "../../../dialogComponent/chooseDialog/chooseDialog.component";
// import { ChooseDialogComponent } from "../chooseDialog/chooseDialog.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  @Input() list;
  @Input() type;
  constructor(
    private dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
  }
  // openDialog(): void {
  //   console.log(this.list.dialog);
  //   const dialogRef = this.dialog.open(ListDialogComponent, {
  //     maxWidth: "100%",
  //     panelClass: "dialogStyle",
  //     autoFocus: false,
  //     data: { list: this.list.dialog }
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
  // listDialogHandler(result: any) {
  //   if (!result) {
  //     return;
  //   }
  //   if (result.actionName === "dialog") {
  //     console.log("create new dialog " + result.action);
  //     switch (result.action) {
  //       case "NewSongSheetDialog":
  //        // this.openNewSongSheetDialog();
  //         break;
  //       case "ChooseDialog":
  //         this.openChooseDialog();
  //         break;
  //       default:
  //         break;
  //     }
  //   } else if (result.actionName === "redirect") {
  //     this.router.navigate([result.action], { relativeTo: this.route });
  //   }
  // }
}
