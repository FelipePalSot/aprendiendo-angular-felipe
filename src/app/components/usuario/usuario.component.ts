import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperCasePipe, LowerCasePipe, DatePipe } from '@angular/common';
import {VentasComponent} from '../ventas/ventas.component';

import { cambiaLetrasPipe } from '../../pipes/cambiaLetras.pipe';
import { ProductComponent } from '../producto/producto.component';


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [ ProductComponent, VentasComponent,  UpperCasePipe, LowerCasePipe, DatePipe, cambiaLetrasPipe],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  web = "https://victorroblesweb.es/ruta";
  redirigir = false;

  marcasPadel = [
    "SIUX", "Kombat", "Bullpadel", "Head", "Adidas", "Starvite"
  ];

   objetosPaises = [
   {
    id:1,
    name:"Peru"
   },
   {
    id:2,
    name:"Chile"
   },
   {
    id:3,
    name:"Colombia"
   },
   {
    id:4,
    name:"Ecuador"
   },
  ];

  usuario = {
    id:1,
    nombre: "Felipe Palomino",
    nick: "felipePalominoWeb",
    rol: "user"
  }

  fecha = new Date(2030, 12, 25);

  ngOnInit(){
    this.objetosPaises=[];
  }

  cambioRedireccion(){

    if(this.redirigir == false){
      this.redirigir = true;
    }else{
      this.redirigir = false;
    }

  }
}
