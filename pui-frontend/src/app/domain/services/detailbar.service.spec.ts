import { TestBed, inject } from '@angular/core/testing';

import { DetailbarService } from './detailbar.service';

describe('DetailbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailbarService]
    });
  });

  it('should be created', inject([DetailbarService], (service: DetailbarService) => {
    expect(service).toBeTruthy();
  }));
});
