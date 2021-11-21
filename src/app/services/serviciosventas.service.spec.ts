import { TestBed } from '@angular/core/testing';

import { ServiciosventasService } from './serviciosventas.service';

describe('ServiciosventasService', () => {
  let service: ServiciosventasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosventasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
