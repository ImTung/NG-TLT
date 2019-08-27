import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TLTPlaceholderLoadingModule } from "projects/ng-tlt/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TLTPlaceholderLoadingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
