import { TestBed } from '@angular/core/testing';

import { RepoRequestService } from './repo-request.service';

describe('RepoRequestService', () => {
  let service: RepoRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
