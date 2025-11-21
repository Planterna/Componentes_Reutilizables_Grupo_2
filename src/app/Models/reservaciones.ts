export interface Reservaciones {
  id: number;
  id_tipo_recurso: number;
  nombre_vecino: string;
  fecha: Date;
  hora_inicio: string;
  hora_fin: string;
  motivo: string;
  estado: Estado;
  id_recurso: number;
  nombre_recurso?: TipoRecurso;
  imagen: string;
}

export enum Estado {
  Aprobada = 'Aprobada',
  Pendiente = 'Pendiente',
  Rechazada = 'Rechazada',
}

export enum TipoRecurso {
  Herramienta = 'herramienta',
  Instalacion = 'instalacion',
}
