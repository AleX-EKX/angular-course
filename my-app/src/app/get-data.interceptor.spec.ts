import { TestBed } from '@angular/core/testing';

import { GetDataInterceptor } from './get-data.interceptor';

describe('GetDataInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GetDataInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GetDataInterceptor = TestBed.inject(GetDataInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
