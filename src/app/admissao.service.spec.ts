import { TestBed } from '@angular/core/testing';

import { AdmissaoService } from './admissao.service';

describe('AdmissaoService', () => {
  let service: AdmissaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
