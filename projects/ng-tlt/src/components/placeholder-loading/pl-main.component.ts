import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  Input
} from "@angular/core";

@Component({
  selector: "tltPL",
  templateUrl: "pl-main.component.html",
  styleUrls: ["./pl-main.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PLMain implements AfterViewInit {
  @Input() type = "default" || "card" || "article" || "custom";
  @Input() animated: boolean = true;
  ngAfterViewInit(): void {}
}
