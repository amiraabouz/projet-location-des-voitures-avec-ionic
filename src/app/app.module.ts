import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CarsPage } from '../pages/cars/cars';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { CarsService } from '../services/cars.service';
import { CarDetailPage } from '../pages/car-detail/car-detail';
import { ExplicationPage } from '../pages/explication/explication';
import { CreationcomptePage } from '../pages/creationcompte/creationcompte';
import { CompteService } from '../services/compte.service';
import { SQLite } from '@ionic-native/sqlite';
import { PanierPage } from '../pages/panier/panier';
import { ReservationPage } from '../pages/reservation/reservation';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { CarsadminPage } from '../pages/carsadmin/carsadmin';
import { CarDetailadminPage } from '../pages/car-detailadmin/car-detailadmin';
import { AjoutcaradminPage } from '../pages/ajoutcaradmin/ajoutcaradmin';
import { ModifiercaradminPage } from '../pages/modifiercaradmin/modifiercaradmin';

// import { CreationcomptePage } from '../pages/creationcompte/creationcompte';

@NgModule({
  declarations: [
    MyApp,
    AcceuilPage,
    CarsPage,
    SettingsPage,
    TabsPage,
    CarDetailPage,
    ExplicationPage,
    CreationcomptePage,
    PanierPage,
    ReservationPage,
    DashboardPage,
    CarsadminPage,
    CarDetailadminPage,
    AjoutcaradminPage,
    ModifiercaradminPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AcceuilPage,
    CarsPage,
    SettingsPage,
    TabsPage,
    CarDetailPage,
    ExplicationPage,
    CreationcomptePage,
    PanierPage,
    ReservationPage,
    DashboardPage,
    CarsadminPage,
    CarDetailadminPage,
    AjoutcaradminPage,
    ModifiercaradminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CarsService,
    CompteService,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
