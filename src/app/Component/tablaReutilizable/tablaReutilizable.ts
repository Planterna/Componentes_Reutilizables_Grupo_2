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
    // this.loadGenres();
  }

  loadReservas(): void {
    this.miServicio.getReservas().subscribe((data: Reservaciones[]) => (this.reservaciones = data));
  }

  loadRecursos(): void {
    this.miServicio.getRecursos().subscribe((data: Recursos[]) => (this.recursos = data));
  }
  visualizarReserva(id: number) {
    this.router.navigate(['/reserva/', id]);
  }

  // comprar(movie: Movie) {
  //   alert('comprando la pelicula: ' + movie.title);
  // }
  // desactivar(img: HTMLImageElement) {
  //   img.classList.remove('activa');
  // }
  // activar(img: HTMLImageElement) {
  //   img.classList.add('activa');
  // }
}
