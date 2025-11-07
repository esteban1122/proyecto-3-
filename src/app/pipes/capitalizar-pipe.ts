import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) return value;
    
    // Si es una cadena vacía, retorna tal como está
    if (value.length === 0) return value;
    
    // Convierte la primera letra a mayúscula y el resto a minúscula
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}
