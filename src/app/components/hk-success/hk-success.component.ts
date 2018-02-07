import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hk-success',
  templateUrl: './hk-success.component.html',
  styleUrls: ['./hk-success.component.css']
})
export class HkSuccessComponent {
  @Input() cleaner: string;
  @Input() day: string;
  @Input() end: string;
  @Input() start: string;
  @Input() success: string;
  @Input() visitDuration: string;
}
