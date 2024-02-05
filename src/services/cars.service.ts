import { Injectable } from '@angular/core';
import { Car} from '../app/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable ()
export class CarsService {

constructor(private httpClient: HttpClient){}

getCar(carId: string): Observable<Car>{
    return this.httpClient.get<Car>(API + "/"+ carId);

}

getCars(): Observable<Car[]>{

    return this.httpClient.get<Car[]>(API);
}

}
const API =" http://localhost:3000/cars";
