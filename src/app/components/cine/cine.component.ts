import { Component, Injectable } from '@angular/core';
import { Pelicula } from '../../models/pelicula'
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { PeliculaService } from  '../../services/pelicula.service';

@Component({
  selector: 'app-cine',
  imports: [FormsModule, NgStyle],
  // providers: [PeliculaService], Se aplica sino colocamos providedIn: "root", en el servicio de Injectable
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  public titulo: string;
  public peliculas: Array<Pelicula>;
  //Para trabajar con formularios y binding bidereccional
  public mi_pelicula: string = "";
  public pelisSinDatos: string[] = [];

  public color: string = "#FFFFFF"

  constructor(
    private peliculaService: PeliculaService
  ){
    this.titulo = "Modelos";

    this.peliculas = this.peliculaService.getPeliculas();
  }

  ngOnInit(){
    console.log(this.peliculas);
    this.peliculas[1].titulo = "ET el MARCIANO";

    this.peliculaService.saludoService();
  }

  ngDoCheck(){
    console.log(this.mi_pelicula);
  }

  showPelicula(){
    alert(this.mi_pelicula)
  }

  addPelicula(){
    //this.peliculas.push(this.mi_pelicula);

    // let peliculasAlReves = this.peliculas.reverse();
    let identificador = (this.peliculas[this.peliculas.length - 1].id + 1);
    let nuevaPelicula = new Pelicula(identificador, this.mi_pelicula);

   this.peliculas.push(nuevaPelicula);
  }

  borrarPeli(indice:number){
    this.peliculas.splice(indice, 1)
  }

  haciendoFoco(){
    console.warn("Estas dentro del input de peliculas");
  }

  saliendoDelFoco(){
    console.warn("Estas fuera del input de peliculas");
  }

  pulsandoTeclas(event: KeyboardEvent){
    console.warn("Estas pulsando la tecla: "+event.key);
  }
}
