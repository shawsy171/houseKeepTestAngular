import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../services/app.service';

// interfaces
import { StartTime } from '../../interfaces/time-slot.interface';

@Component({
  selector: 'app-hk-time-slot',
  templateUrl: './hk-time-slot.component.html',
  styleUrls: ['./hk-time-slot.component.css']
})
export class HkTimeSlotComponent {
  @Input() day: string;
  @Input() start: string;
  @Input() end: string;
  @Input() possible: boolean;

  @Output() clicked: EventEmitter<StartTime> = new EventEmitter<StartTime>();

  // misc
  selected = false;

  constructor(private appService: AppService) {}

  /**
   * toggle background colour of the selected time slot
   */
  toggleSeletion (e: HTMLLIElement): void {
    console.log('e', e);
    if ((e['target'].type) !== 'button') {
      if (this.possible) {
        this.selected = !this.selected;
      }
    }
  }

  /**
   * when book button is clicked send time slot details to the main <app> component
   */
  bookBtnClick (): void {
    this.appService.booking$.next({
      day: this.day,
      start: this.start,
      end: this.end
    });
  }
}
