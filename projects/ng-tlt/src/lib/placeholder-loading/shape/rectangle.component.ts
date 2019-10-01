import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TLTAnimation } from '../../shared/tlt-animations';

@Component({
  selector: 'tlt-plrect',
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
export class PLShapeRectangleComponent {
  @Input() width: string | number = 100;
  @Input() height: string | number = 30;
  @Input() color = '#EEE';
  @Input() radius: string | number = 10;
  @Input() animated: boolean;
  @Input() duration = 1000;
  @Input() colorAni = '#DDD';

  constructor() { }

  rectStyle() {
    const height = typeof this.height === 'number' ? this.height + 'px' : this.height;
    const width = typeof this.width === 'number' ? this.width + 'px' : this.width;
    const radius = typeof this.radius === 'number' ? this.radius + 'px' : this.radius;
    // tslint:disable: object-literal-shorthand
    let style = {
      width: width,
      height: height,
      'border-radius': radius,
      display: 'flex',
      'flex-direction': 'column',
      position: 'relative',
      background: this.color
    };
    if (this.animated) {
      style = Object.assign(style, this.animation);
    }
    return style;
  }

  get animation() {
    const ani = {
      background: `linear-gradient(to right, ${this.color} 8%, ${this.colorAni} 18%, ${this.color} 33%)`,
      'background-size': '800px 100px',
      'animation-duration': this.duration + 'ms',
      'animation-name': 'tltPLAnimated',
      'animation-timing-function': 'linear',
      'animation-iteration-count': 'infinite',
      'animation-fill-mode': 'forwards'
    };
    return ani;
  }
}
