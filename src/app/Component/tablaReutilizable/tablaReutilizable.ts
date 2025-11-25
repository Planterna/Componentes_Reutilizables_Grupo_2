import { Component, inject, signal } from '@angular/core';
import { Reservaciones } from '../../Models/reservaciones';
import { Recursos } from '../../Models/recursos';
import { ServReservacionesService } from '../../services/serv-reservaciones';
import { Router } from '@angular/router';
import { CuadroAlerta } from '../cuadroAlerta/cuadroAlerta';
import { FuncionesVarias } from '../../utils/funciones-varias';

@Component({
  selector: 'app-tabla-reutilizable',
  imports: [CuadroAlerta],
  templateUrl: './tablaReutilizable.html',
})
export class TablaReutilizable {
  reservaciones: Reservaciones[] = [];
  recursos: Recursos[] = [];
  reservacion!: Reservaciones;
  info: string = '';
  funciones = new FuncionesVarias();

  router = inject(Router);
  private resolverModal!: (value: boolean) => void;
  constructor(private miServicio: ServReservacionesService) {}
  ngOnInit(): void {
    this.loadReservas();
  }
  loadReservas(): void {
    this.miServicio.getReservas().subscribe((data: Reservaciones[]) => (this.reservaciones = data));
  }
  visualizarReserva(id: number, infor: string) {
    this.miServicio.getReservaById(id).subscribe((data) => {
      this.info = infor;
      this.reservacion = data;
      setTimeout(() => {
        const modal = this.funciones.asignarModal();
        modal.show();
      });
    });
  }

  searchByName(name: string) {
    this.miServicio
      .searchReservasForName(name)
      .subscribe((data: Reservaciones[]) => (this.reservaciones = data));
  }
  charge() {
    this.loadReservas();
  }
  esperarRespuestaModal(): Promise<boolean> {
    return new Promise((resolve) => {
      this.resolverModal = resolve;
    });
  }

  respuestaModal(valor: boolean) {
    this.resolverModal(valor);
  }

  async deleteReserva(id: number, infor: string) {
    this.visualizarReserva(id, infor);

    const confirmado = await this.esperarRespuestaModal();

    if (!confirmado) {
      console.log('Eliminación cancelada.');
      return this.visualizarReserva(id, 'alert');
    }
    this.visualizarReserva(id, 'success');
    setTimeout(()=>{
      this.miServicio.deleteReserva(id).subscribe((reservaActualizada: Reservaciones) => {
        this.reservacion = reservaActualizada;
      });
    },3000)
  }
  activarReserva(id: number, infor: string) {
    this.visualizarReserva(id, infor);
    setTimeout(()=>{
      this.miServicio.activarReserva(id).subscribe((reservaActualizada: Reservaciones) => {
        this.reservacion = reservaActualizada;
      });
    },3000)
  }
}

