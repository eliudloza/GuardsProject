import { TestBed } from '@angular/core/testing';

import { PostsResolverGuard } from './posts-resolver.guard';

describe('PostsResolverGuard', () => {
  let guard: PostsResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostsResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
