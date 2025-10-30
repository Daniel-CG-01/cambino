import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing } from "./components/landing/landing";
import { Menu } from "./components/menu/menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Landing, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cambino');
}
