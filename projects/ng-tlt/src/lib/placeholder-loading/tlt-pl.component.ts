import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { TLTPLType, TLTUnitType } from '../shared/types';

@Component({
  selector: 'tlt-pl',
  templateUrl: './tlt-pl.component.html',
  styleUrls: ['./tlt-pl.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PLComponent implements OnInit, OnChanges {
  @Input() type: TLTPLType = 'default';
  @Input() size: TLTUnitType = 48;
  @Input() width: TLTUnitType = 100;
  @Input() height: TLTUnitType = 30;
  @Input() animated = true;
  @Input() color = '#EEE';
  @Input() duration = 1000;
  @Input() colorAni = '#DDD';

  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
