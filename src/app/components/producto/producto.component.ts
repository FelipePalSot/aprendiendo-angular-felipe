import { Component } from "@angular/core";
import { PeliculaComponent } from "../pelicula/pelicula.component";
// import { CommonModule } from '@angular/common';



@Component({ 
    selector: "mi-producto",
    standalone: true,
    imports : [ PeliculaComponent],
    templateUrl:"producto.component.html",
    styleUrl: "producto.component.css",
})



export class ProductComponent{

    public nombre: string;
    public marca: string;
    public precio: string;
    public descripcion: string;

    public mostrar_peliculas: boolean = true;

    constructor(){
        this.nombre = "PC PORTATIL 1";
        this.marca = "AASUS";
        this.precio = "400";
        this.descripcion = "Este portatil es muy potente";

        console.log("Se ha cargado el componente producto !!");
       
    }

    ngOnInit(){
        console.log("Vale, el componente ngOnInit");
    }

    ngDoCheck(){
        console.log("Componente actualizado")
    }

    cambiarNombre(valor: string){
        this.nombre = valor;
    }

    ocultarPeliculas(valor: boolean){
        this.mostrar_peliculas = valor;
    }
}