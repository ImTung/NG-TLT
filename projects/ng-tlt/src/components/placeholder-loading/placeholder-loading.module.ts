import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaceholderLoadingComponent } from "./placeholder-loading.component";
import { PlaceholderLoadingCircleComponent } from "./partial/placeholder-loading-circle.component";
const COMPONENTS = [
  PlaceholderLoadingComponent,
  PlaceholderLoadingCircleComponent
];
@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule]
})
export class TLTPlaceholderLoadingModule {}
