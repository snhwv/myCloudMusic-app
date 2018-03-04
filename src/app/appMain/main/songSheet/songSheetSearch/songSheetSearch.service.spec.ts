/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SongSheetSearchService } from './songSheetSearch.service';

describe('Service: SongSheetSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongSheetSearchService]
    });
  });

  it('should ...', inject([SongSheetSearchService], (service: SongSheetSearchService) => {
    expect(service).toBeTruthy();
  }));
});