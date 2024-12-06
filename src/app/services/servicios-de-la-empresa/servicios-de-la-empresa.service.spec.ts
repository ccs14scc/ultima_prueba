import { TestBed } from '@angular/core/testing';

import { ServiciosDeLaEmpresaService } from './servicios-de-la-empresa.service';

describe('ServiciosDeLaEmpresaService', () => {
  let service: ServiciosDeLaEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosDeLaEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
