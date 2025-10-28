import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './ejercicio01clase.html',
  styleUrl: './ejercicio01clase.css',
})
export class Ejercicio01Clase {

  nombre = 'Daniel';
  titulo = 'Homer';
  ancho = 200;
  hasError = true;
  mostrar = false;
  items = ['Manzana', 'Banana', 'Naranja'];
  today = new Date();

  constructor() {
    console.log('constructor');
    this.nombre = 'Alex';
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.nombre = 'Pedro';
  }

  suma(a: number, b: number) {
    return a+b;
  }

  noHayError() {
    return !this.hasError;
  }

  siHayError() {
    return this.hasError;
  }

  cambiarNombre() {
    this.nombre = 'Santi';
  }

  cambiarNombreInput(event: any) {
    this.nombre = event.target.value;
  }

  flipMostrar() {
    this.mostrar = !this.mostrar;
  }
}