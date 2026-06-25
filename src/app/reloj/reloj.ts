import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj',
  standalone: true,
  templateUrl: './reloj.html',
  styleUrls: ['./reloj.css']
})
export class Reloj {
  horaActual: string = '';

  constructor() {
    this.actualizarHora();
    setInterval(() => this.actualizarHora(), 1000);
  }

  actualizarHora() {
    const ahora = new Date();
    this.horaActual = ahora.toLocaleTimeString();
  }
}
