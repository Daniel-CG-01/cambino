import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../model/userInterface';
import { JsonplaceholderService } from '../../services/jsonplaceholder-service';

@Component({
  selector: 'app-datos2-unrouted',
  imports: [],
  templateUrl: './datos2-unrouted.html',
  styleUrl: './datos2-unrouted.css',
})

export class Datos2Unrouted {

  data = inject(MAT_DIALOG_DATA);
  nUsuario:number = 0;
  oUsuario:User | null = null;
  loading:boolean = true;

  constructor(private oJsonplaceholderService: JsonplaceholderService) {
    console.log("Datos recibidos en el diálogo: ", this.data);
    this.nUsuario = this.data.usuario_id;
    this.oJsonplaceholderService.getUser(this.nUsuario).subscribe({
      next: (user: User) => {
        console.log("Usuario obtenido:", user);
        this.oUsuario = user;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error al obtener el usuario:", error);
        this.loading = false;
      }
    });
  }

  ngOnInit() {
    
  }
}