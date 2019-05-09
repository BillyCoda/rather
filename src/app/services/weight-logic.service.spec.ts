import { TestBed } from '@angular/core/testing';

import { WeightLogicService } from './weight-logic.service';

describe('WeightLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeightLogicService = TestBed.get(WeightLogicService);
    expect(service).toBeTruthy();
  });
});
