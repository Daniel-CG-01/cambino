import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioSelectorUnrouted } from '../usuario-selector-unrouted/usuario-selector-unrouted';
import { User } from '../../model/userInterface';

@Component({
  selector: 'app-mostrar-usuario',
  imports: [],
  templateUrl: './mostrar-usuario.html',
  styleUrl: './mostrar-usuario.css',
})

export class MostrarUsuario {

  oSelectedUser: User | null = null;

  constructor(private oMatDialog: MatDialog) {
    
  }

  selectUser() {
    const oDialogRef = this.oMatDialog.open(UsuarioSelectorUnrouted, {
      height: '500px',
      width: '800px',
    });
    oDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this.oSelectedUser = result;
      }
    });
  }
}