import {
  Component,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'tlt-pl',
  templateUrl: './tlt-pl.component.html',
  styleUrls: ['./tlt-pl.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PLComponent {
  @Input() type = 'default' || 'avatar' || 'image' || 'card' || 'article' || 'custom';
  @Input() size: string | number = 48;
  @Input() width: string | number = 100;
  @Input() height: string | number = 30;
  @Input() animated = true;
  @Input() color = '#EEE';
  @Input() duration = 1000;
  @Input() colorAni = '#DDD';
}
