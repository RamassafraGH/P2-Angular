import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Footer } from "./footer/footer";
import { Reloj } from "./reloj/reloj";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Footer, Reloj], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularRM');
}
