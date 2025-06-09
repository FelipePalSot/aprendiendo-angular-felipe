import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable({
    providedIn: "root"
})

export class PeliculaService{

    public peliculas: Array<Pelicula>;

    constructor(){
    this.peliculas = [
      new Pelicula(1,"El padrino", "Mafia", "Copola", 1976, "prime", false),
      new Pelicula(2,"The Shawshank Redemption", "Drama", "Frank Darabont", 1994, "netflix", false),
      new Pelicula(3,"The Dark Knight", "Action", "Christopher Nolan", 2008, "hbo", false),
      new Pelicula(4,"Pulp Fiction", "Crime", "Quentin Tarantino", 1994, "netflix", false),
      new Pelicula(5,"Forrest Gump", "Drama", "Robert Zemeckis", 1994, "prime", false),
      new Pelicula(6,"Inception", "Sci-Fi", "Christopher Nolan", 2010, "netflix", false),
      new Pelicula(7,"The Matrix", "Sci-Fi", "Wachowskis", 1999, "hbo", false),
      new Pelicula(8,"Spirited Away", "Animation", "Hayao Miyazaki", 2001, "netflix", false),
      new Pelicula(9,"Parasite", "Thriller", "Bong Joon Ho", 2019, "hulu", false), 
      new Pelicula(10,"Gladiator", "Action", "Ridley Scott", 2000, "prime", false),
      new Pelicula(11,"Interstellar", "Sci-Fi", "Christopher Nolan", 2014, "prime", false)
    ];
  }

  getPeliculas(): Array<Pelicula>{
    return this.peliculas;
  }


   saludoService(){
        console.log("Hola desde el servicio");
    }

}