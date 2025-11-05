import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../model/userInterface';

@Component({
  selector: 'app-datos2-unrouted',
  imports: [],
  templateUrl: './datos2-unrouted.html',
  styleUrl: './datos2-unrouted.css',
})
export class Datos2Unrouted {

  data = inject(MAT_DIALOG_DATA);
  oUsuario:number = 0;

  ngOnInit() {
    console.log("Datos recibidos en el diálogo: ", this.data);
    this.oUsuario = this.data.usuario_id;

    // ACABAR
  }
}