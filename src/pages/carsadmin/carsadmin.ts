import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Car } from '../../app/types';
import { CarsService } from '../../services/cars.service';
import { AjoutcaradminPage } from '../ajoutcaradmin/ajoutcaradmin';
import { CarDetailadminPage } from '../car-detailadmin/car-detailadmin';
import { ModifiercaradminPage } from '../modifiercaradmin/modifiercaradmin';

/**
 * Generated class for the CarsadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carsadmin',
  templateUrl: 'carsadmin.html',
})
export class CarsadminPage {

  carsList: Observable<Car[]>;

constructor(private carsService: CarsService,public navCtrl: NavController) {
    this.carsList =carsService.getCars();
    
}
onGoToCars (car:{nom: string;
    image: string;
    prix: string;
    catégorie_du_véhicule : string;
    N_immatriculation: string;
    Date_de_première_mise_en_circulation: string;
    Marque: string;
    Version : string;
    Type_de_transmission : string;
    Climatisation: string;
    Nombredeportes: string;
    Nombredepassagers: string;
     Capacitébagages : string;
    Ageminimum : string;
    Nombre_requis_dannées_de_possession_du_permis_de_conduire : string;
    Airbag: string;
    Accessoires: string;
    Équipementspéciaux: string;}){

    this.navCtrl.push( CarDetailadminPage , {car:car} );
}
onGoToAjouter (){
  this.navCtrl.push( AjoutcaradminPage );
}
}
