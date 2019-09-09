import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZtGridComponent } from './zt-grid/zt-grid.component';
import { ZtGridHeadComponent } from './zt-grid-head/zt-grid-head.component';
import { ZtGridTitleComponent } from './zt-grid-title/zt-grid-title.component';
import { ZtGridHeadCellComponent } from './zt-grid-head-cell/zt-grid-head-cell.component';
import { ZtGridBodyComponent } from './zt-grid-body/zt-grid-body.component';
import { ZtGridBodyRowComponent } from './zt-grid-body-row/zt-grid-body-row.component';
import { ZtGridBodyRowCellComponent } from './zt-grid-body-row-cell/zt-grid-body-row-cell.component';

@NgModule({
  declarations: [ZtGridComponent, ZtGridHeadComponent, ZtGridTitleComponent, ZtGridHeadCellComponent, ZtGridBodyComponent, ZtGridBodyRowComponent, ZtGridBodyRowCellComponent],
  exports: [ZtGridComponent],
  imports: [
    CommonModule
  ]
})
export class ZtGridModule { }
