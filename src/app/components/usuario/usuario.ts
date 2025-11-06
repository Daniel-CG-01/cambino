import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { User } from '../../model/userInterface';
import { MatDialog } from '@angular/material/dialog';
import { DatosUnrouted } from '../datos-unrouted/datos-unrouted';
import { Datos2Unrouted } from '../datos2-unrouted/datos2-unrouted';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

export class UsuarioComponent {

  usuarios: User[] = [];
  readonly oMatDialog = inject(MatDialog);

  constructor(private oUsuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.oUsuarioService.getAll().subscribe((users: User[]) => {
      console.log(users);
      this.usuarios = users;
    });
  }

  verDatosUsuario(user: User) {
    console.log("Datos del usuario del padre...", user);
    //alert(`Usuario: ${user.name}\nUsername: ${user.username}\nEmail: ${user.email}\nTeléfono: ${user.phone}\nWeb: ${user.website}`);

    this.oMatDialog.open(DatosUnrouted, {
      height: '400px',
      width: '600px',
       data: {
        usuario: user,
      }
    });
  }

  verDatosUsuario2(user: User) {
    console.log("Datos del usuario del padre...", user);
    //alert(`Usuario: ${user.name}\nUsername: ${user.username}\nEmail: ${user.email}\nTeléfono: ${user.phone}\nWeb: ${user.website}`);
    
    this.oMatDialog.open(Datos2Unrouted, {
      height: '400px',
      width: '600px',
       data: {
        usuario_id: user.id,
      }
    });
  }
}