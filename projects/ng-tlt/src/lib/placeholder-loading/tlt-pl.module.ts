import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLComponent } from './tlt-pl.component';
import { PLShapeCircle } from './shape/circle.component';
import { PLShapeRectangle } from './shape/rectangle.component';
const COMPONENTS = [PLComponent, PLShapeCircle, PLShapeRectangle];
@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule]
})
export class tltPLModule { }
