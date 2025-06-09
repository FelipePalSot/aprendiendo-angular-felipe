import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  nombreDelPadre: string = "Victor Robles WEB";

  saludoRecibido: string = ""

  recibirSaludo( saludo: string){
    this.saludoRecibido = saludo
  }
}
