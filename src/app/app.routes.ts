import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductComponent } from './components/producto/producto.component';
import { CineComponent } from './components/cine/cine.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoSignalsComponent } from './components/carrito-signals/carrito-signals.component';
import { PadreComponent } from './components/padre/padre.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { UsuariosHTTPComponent } from './components/usuarios-http/usuarios-http.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { FormulariosComponent } from './components/formularios/formularios.component';

export const routes: Routes = [
    {path: "", component: ProductComponent },
    {path: "inicio", component: ProductComponent },
    {path: "componentes", component: ProductComponent },
    {path: "ciclo", component: PeliculaComponent },
    {path: "plantillas", component: UsuarioComponent },
    {path: "directivas", component: VentasComponent },
    {path: "modelos", component: CineComponent },
    {path: "carrito", component: CarritoComponent },
    {path: "signals", component: CarritoSignalsComponent },
    {path: "comunicacion", component: PadreComponent },
    {path: "servicios/:id", component: UsuariosHTTPComponent },
    {path: "servicios", component: UsuariosHTTPComponent },
    {path: "formularios", component: FormulariosComponent },
    {path: "**", component:  Pagina404Component},
    
];
