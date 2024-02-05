import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarsadminPage } from './carsadmin';

@NgModule({
  declarations: [
    CarsadminPage,
  ],
  imports: [
    IonicPageModule.forChild(CarsadminPage),
  ],
})
export class CarsadminPageModule {}
