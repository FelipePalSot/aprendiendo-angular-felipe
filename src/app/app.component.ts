import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { config } from './models/config';
import { CineComponent } from './components/cine/cine.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoSignalsComponent } from './components/carrito-signals/carrito-signals.component';
import { PadreComponent } from './components/padre/padre.component';
import { UsuariosHTTPComponent } from './components/usuarios-http/usuarios-http.component';



@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi primer proyecto en angular';

  titulo = config.title;
  descripcion = config.descripcion;
}
