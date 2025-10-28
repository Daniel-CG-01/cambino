import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

  nombreUsuario: string = '';

  constructor(public oRouter: Router) {

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
}