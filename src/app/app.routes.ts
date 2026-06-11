import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Ventas } from './ventas/ventas';
import { Sucursales } from './sucursales/sucursales';
import { Clientes } from './clientes/clientes';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'ventas', component: Ventas },
  { path: 'sucursales', component: Sucursales },
  { path: 'clientes', component: Clientes },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
