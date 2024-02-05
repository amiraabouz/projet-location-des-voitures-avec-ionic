import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarsPage } from '../cars/cars';
import { ExplicationPage } from '../explication/explication';
import { CreationcomptePage } from '../creationcompte/creationcompte';

@Component({
  selector: 'page-acceuil',
  templateUrl: 'acceuil.html',
})
export class AcceuilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToCars (){
    this.navCtrl.push( CarsPage );
}
onGoToCreation (){
  this.navCtrl.push( CreationcomptePage );
}
onGoToExplication (){
  this.navCtrl.push( ExplicationPage );
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilPage');
  }
}
