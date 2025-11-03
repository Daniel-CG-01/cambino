import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu } from "./components/menu/menu";

@Component({
  selector: 'app-root',
  imports: [RouterModule, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('cambino');
}