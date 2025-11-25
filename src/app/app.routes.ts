import { Routes } from '@angular/router';
import { TablaReutilizable } from './Component/tablaReutilizable/tablaReutilizable';
import { CuadroAlerta } from './Component/cuadroAlerta/cuadroAlerta';

export const routes: Routes = [
  
  {
    path:'cuadro-alerta',
    component:CuadroAlerta,
  },
  {
    path: 'tabla-reutilizable',
    component: TablaReutilizable,
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
