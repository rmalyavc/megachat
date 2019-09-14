import { TestBed } from '@angular/core/testing';

import { ServerResponseService } from './server-response.service';

describe('ServerResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerResponseService = TestBed.get(ServerResponseService);
    expect(service).toBeTruthy();
  });
});
