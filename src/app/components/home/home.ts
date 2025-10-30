import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AleatorioService } from '../services/aleatorio';
import { AleatorioComponent } from "../aleatorio/aleatorio";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, AleatorioComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

  nombreUsuario: string = '';

  numeroAleatorio: number = 1;

  constructor(public oRouter: Router, public aleatorioService: AleatorioService) {

  }

  ngOnInit() {

  }

  cambiarNombre(strNuevoNombre: string) {
    this.nombreUsuario = strNuevoNombre;
  }

  irASaludoEnrutado() {
    window.location.href= 'saludoenrutado/' + this.nombreUsuario;
  }

  irASaludoEnrutado2() {
    this.oRouter.navigate(['saludoenrutado', this.nombreUsuario]);
  }

  obtenerNumeroAleatorio() {
    this.numeroAleatorio = this.aleatorioService.generarNumeroAleatorio(1, 100);
  }
}