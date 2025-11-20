import { Routes } from '@angular/router';
import { TablaReutilizable } from './Component/tablaReutilizable/tablaReutilizable';

export const routes: Routes = [
  {
    path: 'tabla-reutilizable',
    component: TablaReutilizable,
    
   },
   {
    path: '',
    redirectTo: 'tabla-reutilizable',
    pathMatch: 'full'
   },
   {
    path: '**',
    redirectTo: 'tabla-reutilizable'
   }



];
