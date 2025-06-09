import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  imports: [FormsModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent {

  nombre = '';  
  email = '';  
  edad = 18;  
  password = '';  

  onSubmit(){
    console.log(this.nombre, this.email, this.edad, this.password)
  }

}
