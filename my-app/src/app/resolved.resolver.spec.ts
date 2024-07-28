import { TestBed } from '@angular/core/testing';

import { ResolvedResolver } from './resolved.resolver';

describe('ResolvedResolver', () => {
  let resolver: ResolvedResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResolvedResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
