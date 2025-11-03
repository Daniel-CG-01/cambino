import { Injectable } from '@angular/core';
import { User } from '../model/userInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceTs {
  
  constructor() {

  }

  getAll():Observable<User[]> {
    return this.oHttpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}