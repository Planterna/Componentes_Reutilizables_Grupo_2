import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Recursos } from '../Models/recursos';
import { Reservaciones } from '../Models/reservaciones';

@Injectable({
  providedIn: 'root',
})
export class ServReservacionesService {
  private recursosUrl = 'http://localhost:3000/recursos';
  private reservasUrl = 'http://localhost:4800/reservas';

  constructor(private http: HttpClient) {}

  getReservas(): Observable<Reservaciones[]> {
    return this.http.get<Reservaciones[]>(this.reservasUrl);
  }

  getReservaById(id: number): Observable<Reservaciones> {
    return this.http.get<Reservaciones>(`${this.reservasUrl}/${id}`);
  }

  searchReservasForName(param: string): Observable<Reservaciones[]> {
    return this.http
      .get<Reservaciones[]>(this.reservasUrl)
      .pipe(
        map((reservas) =>
          reservas.filter((r) => r.nombre_vecino?.toLowerCase().includes(param.toLowerCase()))
        )
      );
  }

  deleteReserva(id: number): Observable<Reservaciones> {
    return this.getReservaById(id).pipe(
      map((reserva) => ({ ...reserva, status: 'Desactivado' })),
      switchMap((body) => this.http.put<Reservaciones>(`${this.reservasUrl}/${id}`, body))
    );
  }
}
