import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarDetailadminPage } from './car-detailadmin';

@NgModule({
  declarations: [
    CarDetailadminPage,
  ],
  imports: [
    IonicPageModule.forChild(CarDetailadminPage),
  ],
})
export class CarDetailadminPageModule {}
