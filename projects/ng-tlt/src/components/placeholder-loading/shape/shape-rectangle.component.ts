import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { TLTAnimation } from "../../../shared/tlt-animations";

@Component({
  selector: "tltPLRect",
  template: `
    <div
      class="tlt-pl shape-rectagnle"
      [ngClass]="{ animated: animated }"
      [ngStyle]="rectStyle()"
    ></div>
  `,
  styles: [
    `
      @keyframes tltPLAnimated {
        0% {
          background-position: -200px 0;
        }
        100% {
          background-position: 200px 0;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: TLTAnimation
})
export class PLShapeRectangle {
  @Input() width = "100px";
  @Input() height = "30px";
  @Input() color = "#EEE";
  @Input() radius = "10px";
  @Input() animated: boolean;
  @Input() duration = "1s";
  @Input() colorAni = "#DDD";

  constructor() {}

  rectStyle() {
    let style = {
      width: this.width,
      height: this.height,
      "border-radius": this.radius,
      display: "flex",
      "flex-direction": "column",
      position: "relative",
      background: this.color
    };
    if (this.animated) {
      style = Object.assign(style, this.animation);
    }
    return style;
  }

  get animation() {
    let ani = {
      background: `linear-gradient(to right, ${this.color} 8%, ${this.colorAni} 18%, ${this.color} 33%)`,
      "background-size": "800px 100px",
      "animation-duration": this.duration,
      "animation-name": "tltPLAnimated",
      "animation-timing-function": "linear",
      "animation-iteration-count": "infinite",
      "animation-fill-mode": "forwards"
    };
    return ani;
  }
}
