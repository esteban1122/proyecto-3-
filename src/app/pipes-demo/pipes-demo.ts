import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapitalizarPipe } from '../pipes/capitalizar-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule, CapitalizarPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  textoUsuario: string = 'hola mundo desde angular';
  fecha: Date = new Date();
  precio: number = 1299.99;
  porcentaje: number = 0.85;
  
  ejemplosTexto: string[] = [
    'hOLa MuNdO',
    'ANGULAR ES GENIAL',
    'typescript rocks',
    'pipe personalizado',
    'PRIMERA letra MAYÚSCULA'
  ];

  textoDemo: string = '';

  constructor() {}

  agregarEjemplo(texto: string): void {
    this.textoDemo = texto;
  }
}
