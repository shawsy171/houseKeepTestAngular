import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

// services
import { AppService } from './services/app.service';

// components
import { AppComponent } from './app.component';
import { HkDayComponent } from './components/hk-day/hk-day.component';
import { HkTimeSlotComponent } from './components/hk-time-slot/hk-time-slot.component';
import { HkCheckComponent } from './components/hk-check/hk-check.component';
import { HkSuccessComponent } from './components/hk-success/hk-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HkDayComponent,
    HkTimeSlotComponent,
    HkCheckComponent,
    HkSuccessComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxErrorsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule { }
