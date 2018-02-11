import { TestBed, inject } from '@angular/core/testing';

import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
    let authorsList: Array<string> = ['Author1', 'Author2', 'Author3', 'Author4'];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorsService]
    });
  });
  it('should return authors list', () => {
    let authorsService = new AuthorsService();
    expect(authorsService.getAuthorsList()).toEqual(authorsList);
  });

});
