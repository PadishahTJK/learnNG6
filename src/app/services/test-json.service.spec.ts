import { TestBed } from '@angular/core/testing';

import { TestJSONService } from './test-json.service';

describe('TestJSONService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestJSONService = TestBed.get(TestJSONService);
    expect(service).toBeTruthy();
  });
});
