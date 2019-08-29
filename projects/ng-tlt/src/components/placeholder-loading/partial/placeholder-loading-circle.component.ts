import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  Input
} from "@angular/core";

@Component({
  selector: "tltPLCircle",
  templateUrl: "placeholder-loading-circle.component.html",
  styleUrls: ["placeholder-loading-circle.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderLoadingCircleComponent implements AfterViewInit {
  ngAfterViewInit(): void {}
}
