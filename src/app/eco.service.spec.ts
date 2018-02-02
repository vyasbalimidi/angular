import { TestBed, inject } from '@angular/core/testing';

import { EcoService } from './eco.service';

describe('EcoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcoService]
    });
  });

  it('should be created', inject([EcoService], (service: EcoService) => {
    expect(service).toBeTruthy();
  }));
});
