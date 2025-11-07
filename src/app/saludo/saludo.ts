import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saludo',
  imports: [FormsModule, CommonModule],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
})
export class Saludo {
  nombre: string = '';
}
