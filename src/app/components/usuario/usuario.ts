import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { User } from '../../model/userInterface';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

export class UsuarioComponent {

  usuarios: User[] = [];

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
    console.log('Datos del usuario...', user);
    alert(`Usuario: ${user.name}\nUsername: ${user.username}\nEmail: ${user.email}\nTeléfono: ${user.phone}\nWeb: ${user.website}`);
  }
}