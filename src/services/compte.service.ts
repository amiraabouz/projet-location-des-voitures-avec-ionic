import { Injectable } from '@angular/core';
import { Compte} from '../app/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable ()
export class CompteService {
signUpUser(email: any, password: any) {
  throw new Error('Method not implemented.');
}
signInUser(email: any, password: any) {
  throw new Error('Method not implemented.');
}

constructor(private httpClient: HttpClient){
}
}

