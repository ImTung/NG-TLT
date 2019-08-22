import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  Input
} from "@angular/core";

@Component({
  selector: "tlt-placeholder-loading",
  templateUrl: "placeholder-loading.component.html",
  styleUrls: ["./placeholder-loading.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderLoadingComponent implements AfterViewInit {
  @Input() type = "default" || "card" || "article" || "custom";
  ngAfterViewInit(): void {}
}
