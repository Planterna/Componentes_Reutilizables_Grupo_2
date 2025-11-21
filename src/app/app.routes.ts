import { Routes } from '@angular/router';
import { TablaReutilizable } from './Component/tablaReutilizable/tablaReutilizable';
import { VistaReservas } from './Component/vistaReservas/vistaReservas';

export const routes: Routes = [
  {
    path: 'tabla-reutilizable',
    component: TablaReutilizable,
  },
  {
    path: 'reserva',
    component: VistaReservas,
  },
  {
    path: 'reserva/:id',
    component: VistaReservas,
  },
  {
    path: '',
    redirectTo: 'tabla-reutilizable',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'tabla-reutilizable',
  },
];
