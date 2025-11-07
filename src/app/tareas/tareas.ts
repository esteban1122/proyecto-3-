import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  tareas: string[] = [
    'Estudiar Angular',
    'Completar ejercicios',
    'Practicar TypeScript',
    'Revisar documentación'
  ];

  nuevaTarea: string = '';

  eliminarTarea(index: number): void {
    this.tareas.splice(index, 1);
  }

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      this.tareas.push(this.nuevaTarea.trim());
      this.nuevaTarea = '';
    }
  }

  trackByIndex(index: number, item: string): number {
    return index;
  }
}
