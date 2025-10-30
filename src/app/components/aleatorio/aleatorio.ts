import { Component } from '@angular/core';
import { AleatorioService } from '../services/aleatorio';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.html',
  styleUrl: './aleatorio.css',
})
export class AleatorioComponent {

  numeroAleatorio: number = 1;

  constructor(public aleatorioService: AleatorioService) {

  }

  ngOnInit() {
    this.numeroAleatorio = this.aleatorioService.generarNumeroAleatorio(1, 100);
  }
}