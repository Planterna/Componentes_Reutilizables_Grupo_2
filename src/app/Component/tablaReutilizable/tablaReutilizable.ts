import { Component, inject } from '@angular/core';
import { Reservaciones } from '../../Models/reservaciones';
import { Recursos } from '../../Models/recursos';
import { ServReservacionesService } from '../../services/serv-reservaciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-reutilizable',
  imports: [],
  templateUrl: './tablaReutilizable.html',
})
export class TablaReutilizable {
  reservaciones: Reservaciones[] = [];
  recursos: Recursos[] = [];
  router = inject(Router);

  constructor(private miServicio: ServReservacionesService) {}

  ngOnInit(): void {
    this.loadReservas();
  }

  loadReservas(): void {
    this.miServicio.getReservas().subscribe((data: Reservaciones[]) => (this.reservaciones = data));
  }

  visualizarReserva(id: number) {
    this.router.navigate(['/reserva/', id]);
  }

  searchByName(name: string) {
    this.miServicio
      .searchReservasForName(name)
      .subscribe((data: Reservaciones[]) => (this.reservaciones = data));
  }

  charge() {
    this.loadReservas();
  }

  deleteReserva(id: number) {
    this.miServicio.deleteReserva(id).subscribe((reservaActualizada: Reservaciones) => {
      this.reservaciones = this.reservaciones.map((r) => (r.id === id ? reservaActualizada : r));
    });
  }
}
