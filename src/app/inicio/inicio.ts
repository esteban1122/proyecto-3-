import { Component } from '@angular/core';
import { Saludo } from '../saludo/saludo';
import { Tareas } from '../tareas/tareas';
import { TareasServicio } from '../tareas-servicio/tareas-servicio';
import { PipesDemo } from '../pipes-demo/pipes-demo';

@Component({
  selector: 'app-inicio',
  imports: [Saludo, Tareas, TareasServicio, PipesDemo],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
