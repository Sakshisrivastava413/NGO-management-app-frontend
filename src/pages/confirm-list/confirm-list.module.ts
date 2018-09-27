import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmListPage } from './confirm-list';

@NgModule({
  declarations: [
    ConfirmListPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmListPage),
  ],
})
export class ConfirmListPageModule {}
