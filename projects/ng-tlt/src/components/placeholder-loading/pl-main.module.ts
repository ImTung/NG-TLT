import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PLMain } from "./pl-main.component";
import { PLShapeCircle } from "./shape/shape-circle.component";
import { PLShapeRectangle } from "./shape/shape-rectangle.component";
const COMPONENTS = [PLMain, PLShapeCircle, PLShapeRectangle];
@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule]
})
export class tltPLModule {}
