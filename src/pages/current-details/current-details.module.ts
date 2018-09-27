import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentDetailsPage } from './current-details';

@NgModule({
  declarations: [
    CurrentDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentDetailsPage),
  ],
})
export class CurrentDetailsPageModule {}
