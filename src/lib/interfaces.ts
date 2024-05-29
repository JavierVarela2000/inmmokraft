export interface Provincia {
	id: number;
	nombre: string;
	latitud: number;
	longitud: number;
}

export interface Canton {
	id: number;
	id_provincia: number;
	Provincias: Provincia;
	nombre: string;
	latitud: number;
	longitud: number;
}

export interface Parroquia {
	id: number;
	id_canton: number;
	Canton: Canton;
	nombre: string;
	latitud: number;
	longitud: number;
}
