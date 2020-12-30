import { TestBed } from '@angular/core/testing';

import { AlertMessageServiceService } from './alert-message-service.service';

describe('AlertMessageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertMessageServiceService = TestBed.get(AlertMessageServiceService);
    expect(service).toBeTruthy();
  });
});
