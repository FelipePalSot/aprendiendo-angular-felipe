import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './formularios-reactivos.component.html',
  styleUrl: './formularios-reactivos.component.css'
})

export class FormulariosReactivosComponent {

  formulario = new FormGroup({
    nombre: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    edad: new FormControl('',[
      Validators.required,
      Validators.min(18),
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
  })

  
  onSubmit(){
    if(this.formulario.valid){
      console.info("Formulario esta enviado: ", this.formulario.value);
    }else{
      console.warn("Formulario NO valido!!");
    }
  }
}
