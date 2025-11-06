import { Component, inject } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder-service';
import { User } from '../../model/userInterface';
import { MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-selector-unrouted',
  imports: [],
  templateUrl: './usuario-selector-unrouted.html',
  styleUrl: './usuario-selector-unrouted.css',
})

export class UsuarioSelectorUnrouted {
  
  users: User[] = [];
  userSelected: User | null = null;

  readonly oDialog = inject(MatDialogRef<UsuarioSelectorUnrouted>);
  readonly data = inject(MAT_DIALOG_DATA);

  constructor(private oJsonplaceholderService: JsonplaceholderService) {
    
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.oJsonplaceholderService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  selectUser(user: User) {
    this.userSelected = user;
    this.oDialog.close(this.userSelected);
  }
}