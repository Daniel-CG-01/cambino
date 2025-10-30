import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HijoComponent } from "../hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [RouterLink, HijoComponent],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class PadreComponent {

  mensajeHijoEnviadoDesdeElPadre: string = "Mensaje inicial para el hijo";

  mensajeRecibidoDelHijo: string = "";

  enviar(mensaje: string) {
    this.mensajeHijoEnviadoDesdeElPadre = mensaje;
  }

  recibirMensajeDelHijo(mensajeRecibidoDelHijo: string) {
    this.mensajeHijoEnviadoDesdeElPadre = mensajeRecibidoDelHijo;
    alert("Mensaje recibido del hijo: " + mensajeRecibidoDelHijo);
  }
}