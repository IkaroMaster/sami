export class Contacto {
    constructor(
        public id: Number,
        public nombre: string,
        public apellido: string,
        public direccion: string,

    ){}
}

export class Numero {
    constructor(
        public id: Number,
        public numero: Number,
        public operadora: string,
        public contacto: Number,

    ){}
}