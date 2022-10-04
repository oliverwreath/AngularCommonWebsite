import {TestBed} from '@angular/core/testing';

import {CsvUtilsService} from './csv-utils.service';

describe('CsvUtilService', () => {
  let service: CsvUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
