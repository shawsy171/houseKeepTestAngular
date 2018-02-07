import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

// interfaces
import { CheckAvailability } from './../../interfaces/form.interfaces';

// utils
import * as moment from 'moment';

@Component({
  selector: 'app-hk-check',
  templateUrl: './hk-check.component.html',
  styleUrls: ['./hk-check.component.css']
})
export class HkCheckComponent implements OnInit {
  @Output() formSubmit: EventEmitter<CheckAvailability> = new EventEmitter<CheckAvailability>();

  form: FormGroup;
  formErrors = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      visitDuration: ['', [Validators.required, Validators.maxLength(3), Validators.min(0.5) ]],
      weekBeginning: ['', [Validators.required, this.isValidDate]],
      postcode: ['', [Validators.required, this.isValidPostcode]],
    });
  }

  ngOnInit() {
    /**
     * turn off errors when user interacts with the form
     */
    this.form
      .valueChanges
      .subscribe((data) => {
      this.formErrors = false;
    });
  }

  /**
   * If vaild send form data to <app>
   */
  onSubmit (): void {
    if (this.form.status === 'VALID') {
      this.formSubmit.emit(this.form.value);
    } else {
      this.formErrors = true;
    }
  }

  /**
   * Custom validator for date
   */
  isValidDate(c: FormControl): { [s: string]: boolean } {
    return moment(c.value).isValid() ?
      null : // date vaild
      { dateInvaild: true }; // date invaild
  }

  /**
   * Custom validator for postcode
   * tests to see if string is in correct UK style postcode: AL1 1AB, BM1 5YZ etc.
   */
  isValidPostcode(c: FormControl): { [s: string]: boolean } {
    const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;

    return postcodeRegEx.test(c.value) ?
      null : // postcode vaild
      { invaildPostcode: true }; // postcode invaild
  }

}
