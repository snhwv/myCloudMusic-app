/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SongPlayService } from './songPlay.service';

describe('Service: SongPlay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongPlayService]
    });
  });

  it('should ...', inject([SongPlayService], (service: SongPlayService) => {
    expect(service).toBeTruthy();
  }));
});