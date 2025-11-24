import { Component } from '@angular/core';
import { ServReservacionesService } from '../../services/serv-reservaciones';
import { Reservaciones } from '../../Models/reservaciones';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vista-reservas',
  imports: [RouterLink],
  templateUrl: './vistaReservas.html',
})
export class VistaReservas {
  reservacion!: Reservaciones;

  constructor(private miServicio: ServReservacionesService, private route: ActivatedRoute) {}

  ngOnInit() {
    //leer el parametro
    const id = this.route.snapshot.paramMap.get('id');
    this.miServicio.getReservaById(Number(id)).subscribe((dato: Reservaciones) => {
      this.reservacion = dato;
    });
  }
}
