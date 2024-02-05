import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Car } from '../../app/types';
import { CarsService } from '../../services/cars.service';
import { PanierPage } from '../panier/panier';

@IonicPage()
@Component({
  selector: 'page-car-detail',
  templateUrl: 'car-detail.html',
})
export class CarDetailPage implements OnInit{

  carDetail: Observable <Car[]>;
  car:{
    nom: string;
    image: string;
    prix: string;
    categorie_du_vehicule : string;
    N_immatriculation: string;
    Date_de_premiere_mise_en_circulation: string;
    Marque: string;
    Version : string;
    Type_de_transmission : string;
    Climatisation: string;
    Nombredeportes: string;
    Nombredepassagers: string;
     Capacitebagages : string;
    Ageminimum : string;
    Nombre_requis_dannees_de_possession_du_permis_de_conduire : string;
    Airbag: string;
    Accessoires: string;
    Equipementspeciaux: string;
  };

  constructor(private carsService: CarsService,public navCtrl: NavController,public navParams: NavParams) {
    this.carDetail =carsService.getCars();    
}
ngOnInit() {
  this.car = this.navParams.get('car');
  }
  onGoToPanier (car:{nom: string;
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

    this.navCtrl.push( PanierPage , {car:car} );
}
}
