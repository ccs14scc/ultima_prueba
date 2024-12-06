import { TestBed } from '@angular/core/testing';

import { TecnicosDeLaEmpresaService } from './tecnicos-de-la-empresa.service';

describe('TecnicosDeLaEmpresaService', () => {
  let service: TecnicosDeLaEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicosDeLaEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
