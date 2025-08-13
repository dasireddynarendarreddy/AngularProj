import { TestBed } from '@angular/core/testing';

import { GlobalProvider } from './global-provider';

describe('GlobalProvider', () => {
  let service: GlobalProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
