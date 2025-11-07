import { Injectable } from '@angular/core';

export interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  fechaCreacion: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private tareas: Tarea[] = [
    {
      id: 1,
      titulo: 'Estudiar Angular',
      completada: false,
      fechaCreacion: new Date()
    },
    {
      id: 2,
      titulo: 'Completar ejercicios',
      completada: true,
      fechaCreacion: new Date()
    },
    {
      id: 3,
      titulo: 'Practicar TypeScript',
      completada: false,
      fechaCreacion: new Date()
    },
    {
      id: 4,
      titulo: 'Revisar documentación',
      completada: false,
      fechaCreacion: new Date()
    }
  ];

  private nextId = 5;

  constructor() { }

  getTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(titulo: string): void {
    const nuevaTarea: Tarea = {
      id: this.nextId++,
      titulo: titulo.trim(),
      completada: false,
      fechaCreacion: new Date()
    };
    this.tareas.push(nuevaTarea);
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  toggleTarea(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }

  getTareasCompletadas(): Tarea[] {
    return this.tareas.filter(tarea => tarea.completada);
  }

  getTareasPendientes(): Tarea[] {
    return this.tareas.filter(tarea => !tarea.completada);
  }
}
