import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookAFlightPage } from './book-a-flight';

@NgModule({
  declarations: [
    BookAFlightPage,
  ],
  imports: [
    IonicPageModule.forChild(BookAFlightPage),
  ],
})
export class BookAFlightPageModule {}
