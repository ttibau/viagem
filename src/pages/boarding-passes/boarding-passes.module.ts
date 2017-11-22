import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoardingPassesPage } from './boarding-passes';

@NgModule({
  declarations: [
    BoardingPassesPage,
  ],
  imports: [
    IonicPageModule.forChild(BoardingPassesPage),
  ],
})
export class BoardingPassesPageModule {}
