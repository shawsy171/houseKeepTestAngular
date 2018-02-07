import { Component, Input, OnInit } from '@angular/core';

// interfaces
import { TimeSlot } from '../../interfaces/time-slot.interface';

// utils
import * as moment from 'moment';

@Component({
  selector: 'app-hk-day',
  templateUrl: './hk-day.component.html',
  styleUrls: ['./hk-day.component.css']
})
export class HkDayComponent implements OnInit {
  @Input() date: string;
  @Input() times: TimeSlot[];

  // misc
  formattedDate: string;
  showlist = false;

  ngOnInit () {
    this.formattedDate = moment(this.date).format('dddd Do');
  }

  toggleListView (): void {
    this.showlist = !this.showlist;
  }
}
