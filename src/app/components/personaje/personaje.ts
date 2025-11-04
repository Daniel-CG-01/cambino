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
  
  verDatosPersonaje(pers: Personaje) {
    console.log('Datos del personaje...', pers);
    alert(`Personaje: ${pers.name}\nColor de pelo: ${pers.hair_color}\nColor de piel: ${pers.skin_color}\nAño de nacimiento: ${pers.birth_year}\nGénero: ${pers.gender}\nPlaneta: ${pers.homeworld}`);
  }
}