import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  ngOnInit(){
    console.log("El componente de pelicula esta Arracando!!")
  }

  ngOnDestroy(){
    console.log("El componente de pelicula ha sido eliminado")
  }
}
