import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Recursos } from '../Models/recursos';
import { Reservaciones } from '../Models/reservaciones';

@Injectable({
  providedIn: 'root'
})
export class ServReservacionesService {

  private recursosUrl = 'http://localhost:3000/recursos';
  private reservasUrl = 'http://localhost:4800/reservas';

  constructor(private http: HttpClient) {}


  getRecursos(): Observable<Recursos[]> {
    return this.http.get<Recursos[]>(this.recursosUrl);
    console.log(this.recursosUrl);
  }

  getRecursoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.recursosUrl}/${id}`);
  }

  searchRecursos(param: string): Observable<any[]> {
    return this.http.get<any[]>(this.recursosUrl).pipe(
      map((recursos) =>
        recursos.filter((r) => r.nombre.toLowerCase().includes(param.toLowerCase()))
      )
    );
  }

  createRecurso(recurso: any): Observable<any> {
    return this.http.post<any>(this.recursosUrl, recurso);
  }

  updateRecurso(recurso: any): Observable<any> {
    return this.http.put<any>(`${this.recursosUrl}/${recurso.id}`, recurso);
  }

  deleteRecurso(id: number): Observable<any> {
    return this.http.delete<any>(`${this.recursosUrl}/${id}`);
  }


  //  RESERVAS

  getReservas(): Observable<Reservaciones[]> {
    return this.http.get<Reservaciones[]>(this.reservasUrl);
  }

  getReservaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.reservasUrl}/${id}`);
  }

  getReservasPorRecurso(recursoId: number): Observable<any[]> {
    return this.http.get<any[]>(this.reservasUrl).pipe(
      map((reservas) => reservas.filter((r) => r.recursoId === recursoId))
    );
  }

  searchReservas(param: string): Observable<any[]> {
    return this.http.get<any[]>(this.reservasUrl).pipe(
      map((reservas) =>
        reservas.filter((r) =>
          r.nombreVecino?.toLowerCase().includes(param.toLowerCase())
        )
      )
    );
  }

  createReserva(reserva: any): Observable<any> {
    return this.http.post<any>(this.reservasUrl, reserva);
  }

  updateReserva(reserva: any): Observable<any> {
    return this.http.put<any>(`${this.reservasUrl}/${reserva.id}`, reserva);
  }

  deleteReserva(id: number): Observable<any> {
    return this.http.delete<any>(`${this.reservasUrl}/${id}`);
  }

  // =============================
  //  ESPECIALES
  // =============================

  // Reservas activas (ejemplo: estado = "Aprobada")
  getReservasActivas(): Observable<any[]> {
    return this.http.get<any[]>(this.reservasUrl).pipe(
      map((reservas) => reservas.filter((r) => r.estado === 'Aprobada'))
    );
  }

}
