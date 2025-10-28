import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './saludoenrutado.html',
  styleUrl: './saludoenrutado.css',
  standalone: true
})
export class SaludoEnrutado {

  nombre: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.nombre = this.route.snapshot.params['nombre'];
  }

  ngOnInit() {

  }
}