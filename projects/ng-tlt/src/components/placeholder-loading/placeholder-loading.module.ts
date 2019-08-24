import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaceholderLoadingComponent } from "./placeholder-loading.component";
const COMPONENTS = [PlaceholderLoadingComponent];
@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule]
})
export class TLTPlaceholderLoadingModule {}
