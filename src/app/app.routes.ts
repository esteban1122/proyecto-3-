import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Acerca } from './acerca/acerca';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'acerca', component: Acerca }
];
