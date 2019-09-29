import {
  Component,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'tlt-pl',
  exportAs: 'tltPL',
  templateUrl: './tlt-pl.component.html',
  styleUrls: ['./tlt-pl.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PLComponent {
  @Input() type = 'default' || 'avatar' || 'card' || 'article' || 'custom';
  @Input() size = '48px';
  @Input() animated = true;
  @Input() color = '#EEE';
  @Input() duration = '1s';
  @Input() colorAni = '#DDD';
}
