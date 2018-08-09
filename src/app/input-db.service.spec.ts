import { TestBed, inject } from '@angular/core/testing';

import { InputDbService } from './input-db.service';

describe('InputDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputDbService]
    });
  });

  it('should be created', inject([InputDbService], (service: InputDbService) => {
    expect(service).toBeTruthy();
  }));
});
