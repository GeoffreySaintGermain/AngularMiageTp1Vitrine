import { TestBed } from '@angular/core/testing';

import { FermetureService } from './fermeture.service';

describe('FermetureService', () => {
  let service: FermetureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FermetureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
