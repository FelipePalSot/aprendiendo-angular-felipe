import { Component } from '@angular/core';
import { PeliculaComponent } from '../pelicula/pelicula.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-ventas',
  imports: [PeliculaComponent, NgClass, NgStyle],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {

  public colorear:boolean = false;
  public mostrar:string = "si";

  misEstilos = {
    'background-color':'blue',
    'font-size':'20px',
    'border-radius':'40px',
    'padding':'10px',
    'color': 'white'
  }
}
