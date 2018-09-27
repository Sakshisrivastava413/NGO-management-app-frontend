import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnevtInfoPage } from './enevt-info';

@NgModule({
  declarations: [
    EnevtInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EnevtInfoPage),
  ],
})
export class EnevtInfoPageModule {}
