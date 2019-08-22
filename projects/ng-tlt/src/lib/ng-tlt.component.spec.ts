import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGTLTComponent } from './ng-tlt.component';

describe('NGTLTComponent', () => {
  let component: NGTLTComponent;
  let fixture: ComponentFixture<NGTLTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGTLTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGTLTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
