import { Component, input, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reservaciones } from '../../Models/reservaciones';

export type AlertType = 'primary' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'app-cuadro-alerta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuadroAlerta.html',
})
export class CuadroAlerta {
  reservacion!: Reservaciones;

  datos = input.required<Reservaciones>();
  informacion = input.required<string>();
  respuesta = output<boolean>();

  aceptar() {
    this.respuesta.emit(true);
  }

  rechazar() {
    this.respuesta.emit(false);
  }
}
