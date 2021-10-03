import { TestBed } from '@angular/core/testing';

import { DbServiceService } from './db-service.service';

describe('DbServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbServiceService = TestBed.get(DbServiceService);
    expect(service).toBeTruthy();
  });
});
