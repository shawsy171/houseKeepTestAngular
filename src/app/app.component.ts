import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

// interfaces
import { DateTime } from './interfaces/datetime.interface';
import { CheckAvailability } from './interfaces/form.interfaces';
import { TimeSlot } from './interfaces/time-slot.interface';
import { PostResponse } from './interfaces/api.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  availabilityList: Observable<DateTime[]>;
  weekCommencing: string;
  visitDuration: string;
  bookingSuccess: any;

  constructor (private appService: AppService ) {}

  ngOnInit() {

    /**
     * When book is selected form the list of results
     * POST to booking end point
     * set bookingSuccess results to be rendered by <hk-success>
     */
    this.appService.booking$
      .subscribe((data: TimeSlot) => {
      this.appService.postBooking(data, this.visitDuration)
        .subscribe((res: PostResponse) => {
        this.bookingSuccess = { ...data, ...res, visitDuration: this.visitDuration };

      });
    });
  }

  /**
   * When form is submitted
   * @param $event <CheckAvailability>
   */
  onFormSubmit($event: CheckAvailability) {
    this.visitDuration = $event.visitDuration;

    /**
     * Call GET end point with form data
     */
    this.availabilityList = this.appService.getAvailability(
      $event.postcode,
      $event.visitDuration,
      $event.weekBeginning,
    );

    /**
     * Set weekCommencing with first day
     */
    this.availabilityList
      .filter(data => data !== undefined)
      .subscribe((data: any) => this.weekCommencing = data[0].day);
  }
}
