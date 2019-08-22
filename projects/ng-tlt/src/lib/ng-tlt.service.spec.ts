import { TestBed } from '@angular/core/testing';

import { NGTLTService } from './ng-tlt.service';

describe('NGTLTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NGTLTService = TestBed.get(NGTLTService);
    expect(service).toBeTruthy();
  });
});
