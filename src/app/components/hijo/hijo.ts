import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class HijoComponent {

  @Input() mensajeHijoRecibidoDelPadre: string = "";

  @Output() mensajeAlPadreDesdeElHijoEventEmitter = new EventEmitter<string>();

  enviarMensajeAlPadre() {
    // Lógica para enviar mensaje al padre (a implementar)
    const mensajeParaElPadre = "El mensaje recibido del padre ha sido obedecido: " + this.mensajeHijoRecibidoDelPadre;
    this.mensajeAlPadreDesdeElHijoEventEmitter.emit(mensajeParaElPadre);
  }
}