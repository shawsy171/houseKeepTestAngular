import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// rxjs
import { Subject } from 'rxjs/Subject';

// interfaces
import { DateTime } from './../interfaces/datetime.interface';
import { TimeSlot } from '../interfaces/time-slot.interface';
import { PostResponse } from '../interfaces/api.interface';

@Injectable()
export class AppService {
  booking$: Subject<TimeSlot> = new Subject<TimeSlot>();

  constructor(private http: HttpClient ) { }

  /**
   * GET available cleaners from api
   * @param postcode string
   * @param visitDuration string
   * @param weekBeginning string
   */
  getAvailability(postcode: string, visitDuration: string, weekBeginning: string): Observable<DateTime[]> {

    const formattedDate = weekBeginning.replace('/', '-');
    const url = 'https://private-anon-05eca8d618-housekeepavailability.apiary-mock.com/availability/?weekBeginning='
      + formattedDate + '&visitDuration='
      + visitDuration + '&postcode='
      + postcode;

    return this.http.get<DateTime[]>(url);
  }
  /**
   * POST booking information to booking end point
   * @param postData <TimeSlot>
   * @param visitDuration string
   */
  postBooking(postData: TimeSlot, visitDuration: string): Observable<PostResponse> {
    const body = {
      'day': postData.day,
      'startTime': {
        'start': postData.start,
        'end': postData.end
      },
      'visitDuration': visitDuration,
      'propertyId': 'ealdk1f9' // where should i get this from?
  };
    const url = `https://private-anon-05eca8d618-housekeepavailability.apiary-mock.com/book/`;
    return this.http.post<PostResponse>(url, body);
  }
}
