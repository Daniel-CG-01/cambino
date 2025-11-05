import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../model/userInterface';

@Component({
  selector: 'app-datos-unrouted',
  imports: [],
  templateUrl: './datos-unrouted.html',
  styleUrl: './datos-unrouted.css',
})

export class DatosUnrouted {

  data = inject(MAT_DIALOG_DATA);
  oUsuario:User = {} as User;

  ngOnInit() {
    console.log("Datos recibidos en el diálogo: ", this.data);
    this.oUsuario = this.data.usuario;
  }
}