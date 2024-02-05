import { Component } from '@angular/core';
import { Car } from '../../app/types';
import { CarsService } from '../../services/cars.service';
import { Observable } from 'rxjs';
import { NavController } from 'ionic-angular';
import { CarDetailPage } from '../car-detail/car-detail';
@Component({
selector: 'page-cars',
templateUrl: 'cars.html'
})


export class CarsPage {
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

    this.navCtrl.push( CarDetailPage , {car:car} );
}

}