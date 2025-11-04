import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personaje } from '../model/personajeInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  
  constructor(private oHttpClient: HttpClient) {

  }

  getAll():Observable<Personaje[]> {
    return this.oHttpClient.get<Personaje[]>('https://swapi.dev/api/people/');
  }
}