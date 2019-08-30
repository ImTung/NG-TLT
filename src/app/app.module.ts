import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { tltPLModule } from "projects/ng-tlt/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, tltPLModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
