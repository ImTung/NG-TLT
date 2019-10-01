import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TLTAnimation } from '../../shared/tlt-animations';

@Component({
  selector: 'tlt-plcircle',
  template: `<div class="tlt-pl shape-circle" [ngClass]="{ animated: animated }" [ngStyle]="circleStyle()"></div>`,
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
export class PLShapeCircleComponent {
  @Input() size: string | number = 30;
  @Input() color = '#EEE';
  @Input() animated: boolean;
  @Input() duration = 1000;
  @Input() colorAni = '#DDD';

  constructor() { }

  circleStyle() {
    const size = typeof this.size === 'number' ? this.size + 'px' : this.size;
    let style = {
      width: size,
      height: size,
      'border-radius': '50%',
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
