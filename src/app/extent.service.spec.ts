import { TestBed, inject } from '@angular/core/testing';

import { ExtentService } from './extent.service';

describe('ExtentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtentService]
    });
  });

  it('should be created', inject([ExtentService], (service: ExtentService) => {
    expect(service).toBeTruthy();
  }));
});
