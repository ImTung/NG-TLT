import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLComponent } from './tlt-pl.component';
import { PLShapeCircleComponent } from './shape/circle.component';
import { PLShapeRectangleComponent } from './shape/rectangle.component';
const COMPONENTS = [PLComponent, PLShapeCircleComponent, PLShapeRectangleComponent];
@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule]
})
export class TLTPLModule { }
