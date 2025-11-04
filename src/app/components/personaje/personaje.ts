import { Component } from '@angular/core';
import { PersonajeService } from '../../services/personaje-service';
import { Personaje } from '../../model/personajeInterface';

@Component({
  selector: 'app-personajes',
  imports: [],
  templateUrl: './personaje.html',
  styleUrl: './personaje.css',
})

export class PersonajeComponent {

  personajes: Personaje[] = [];
  
  constructor(private oPersonajeService: PersonajeService) {

  }
  
  ngOnInit() {
    this.getPersonajes();
  }
  
  getPersonajes() {
    this.oPersonajeService.getAll().subscribe((pers: Personaje[]) => {
      console.log(pers);
      this.personajes = pers;
    });
  }
}