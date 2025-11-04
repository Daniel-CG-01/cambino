import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personaje } from '../model/personajeInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface personajesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Personaje[];
}

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  
  constructor(private oHttpClient: HttpClient) {

  }

  getAll():Observable<Personaje[]> {
    return this.oHttpClient.get<personajesResponse>('https://swapi.dev/api/people/').pipe (
      map(response => response.results)
    );
  }
}