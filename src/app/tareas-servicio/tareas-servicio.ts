import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService, Tarea } from '../services/tareas';

@Component({
  selector: 'app-tareas-servicio',
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas-servicio.html',
  styleUrl: './tareas-servicio.css',
})
export class TareasServicio implements OnInit {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  mostrarSolo: 'todas' | 'completadas' | 'pendientes' = 'todas';

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    switch (this.mostrarSolo) {
      case 'completadas':
        this.tareas = this.tareasService.getTareasCompletadas();
        break;
      case 'pendientes':
        this.tareas = this.tareasService.getTareasPendientes();
        break;
      default:
        this.tareas = this.tareasService.getTareas();
    }
  }

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      this.tareasService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = '';
      this.cargarTareas();
    }
  }

  eliminarTarea(id: number): void {
    this.tareasService.eliminarTarea(id);
    this.cargarTareas();
  }

  toggleTarea(id: number): void {
    this.tareasService.toggleTarea(id);
    this.cargarTareas();
  }

  onFiltroChange(): void {
    this.cargarTareas();
  }

  get totalTareas(): number {
    return this.tareasService.getTareas().length;
  }

  get tareasCompletadas(): number {
    return this.tareasService.getTareasCompletadas().length;
  }

  get tareasPendientes(): number {
    return this.tareasService.getTareasPendientes().length;
  }

  trackByTareaId(index: number, tarea: Tarea): number {
    return tarea.id;
  }
}
