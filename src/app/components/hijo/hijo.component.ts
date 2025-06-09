import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  nombreDelHijo: string = "Juanito";

  @Input() elNombreDeMiPapa: string = "";
  @Output() saludoDelHijo = new EventEmitter();

  enviarSaludo(){
    this.saludoDelHijo.emit("Hola que tal estas papa?? Saludps :)");
  }
}
