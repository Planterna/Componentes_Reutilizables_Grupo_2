
export interface Recursos {
    recursos: TipoRecursos;
  
}

export interface TipoRecursos{
    instalacion: Instalacion[];
    herramienta: Herramienta[];
}

export interface Herramienta {
    id:          number;
    nombre:      string;
    descripcion: string;
    cantidad:    number;
    imagen:      string;
}

export interface Instalacion {
    id:          number;
    nombre:      string;
    capacidad:   number;
    ubicacion:   string;
    descripcion: string;
    imagen:      string;
}


