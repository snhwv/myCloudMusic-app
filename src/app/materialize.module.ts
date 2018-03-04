import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MzTabModule } from 'ng2-materialize';
import { MzSidenavModule } from 'ng2-materialize';
import { MzDropdownModule } from 'ng2-materialize';
@NgModule({
    imports: [CommonModule],
    exports: [MzTabModule,MzSidenavModule,MzDropdownModule],
    declarations: []
  })
  export class MaterializeModule {}
  