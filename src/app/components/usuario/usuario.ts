import { Component } from '@angular/core';
import { UsuarioServiceTs } from '../../services/usuario-service.ts';
import { User } from '../../model/userInterface.js';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class UsuarioComponent {

  usuarios: User[] = [];

  constructor(private oUsuarioService: UsuarioServiceTs) {

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

  verDatosUsuario() {
    console.log('Datos del usuario...', user);
  }
}