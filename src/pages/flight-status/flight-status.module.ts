import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightStatusPage } from './flight-status';

@NgModule({
  declarations: [
    FlightStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightStatusPage),
  ],
})
export class FlightStatusPageModule {}
