export class Pelicula{

    constructor(
        public id: number,
        public titulo: string,
        public genero: string = "",
        public director: string = "",
        public anio: number = 2030,
        public plataforma: string = "",
        public pago: boolean = false,

    ){}

}