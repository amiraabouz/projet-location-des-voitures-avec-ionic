
import { Component } from '@angular/core';
import { CarsPage } from '../cars/cars';
import { SettingsPage } from '../settings/settings';
import { AcceuilPage } from '../acceuil/acceuil';
@Component({
selector: 'page-tabs',
templateUrl: 'tabs.html'
})
export class TabsPage {
carsPage = CarsPage;
settingsPage = SettingsPage;
acceuilPage = AcceuilPage ;
}