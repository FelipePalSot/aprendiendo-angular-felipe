import { Component } from '@angular/core';
import { signal, computed, effect} from '@angular/core';


@Component({
  selector: 'app-carrito-signals',
  imports: [],
  templateUrl: './carrito-signals.component.html',
  styleUrl: './carrito-signals.component.css'
})
export class CarritoSignalsComponent {

    nombreTienda= signal('Mi Tienda');
    cantidadProductos= signal(0);
    notificacion= signal('');
    totalCarrito= signal(0);

    precioBase: number = 37;
    contadorLimiteCupon: number = 0 ;

    constructor(){

      effect(()=>{
        this.comprobarNotificacion();
      });

      effect(()=>{
       console.log("El nombre de la tienda ahora ha cambiado: ", this.nombreTienda());
      });

    }

    addProducto(){
      this.cantidadProductos.update(cantidad => cantidad + 1) ;
      this.totalCarrito.update(total => total + this.precioBase)

      console.log(`Nuevo producto añadido. Precio total actual ${this.totalCarrito()} $`)
      // this.comprobarNotificacion(); **Esto es una actualizacion manual, ahora lo hago por el efecto**
    }

    add5Producto(){
      this.cantidadProductos.update(cantidad => cantidad + 5) ;
      this.totalCarrito.update(total => total + (this.precioBase * 5));

      console.log(`Cindo productos añadidos. Precio total actual ${this.totalCarrito()} $`)
      // this.comprobarNotificacion(); **Esto es una actualizacion manual, ahora lo hago por el efecto**
    }

    deleteProducto(){
      if(this.cantidadProductos() >=1){
        this.cantidadProductos.update(cantidad => -1);
        this.totalCarrito.update(total => total - this.precioBase);

        console.log(`Producto eliminado. Precio total actual ${this.totalCarrito} $`)
        // this.comprobarNotificacion();
      }
    }

    vaciarCarrito(){
        this.cantidadProductos.set(0);
        this.totalCarrito.set(0);

        console.log(`Carrito vaciado. Precio total actual ${this.totalCarrito()} $`)
        // this.comprobarNotificacion();
    }

    descuento(){
      if(this.totalCarrito() > 0 && this.contadorLimiteCupon <= 0 ){
        this.contadorLimiteCupon = 1;
        this.totalCarrito.update(total => total*0.8);
        this.totalCarrito.set(parseFloat(this.totalCarrito().toFixed(2))) ;
      

      console.log(`Descuento Aplicado. Precio total actual ${this.totalCarrito} $`)
      // this.comprobarNotificacion();
      }
    }

    
    comprobarNotificacion(){
      console.log("**Comprobando notificacion")

      let limitePrecio =177;

      if(this.totalCarrito() > limitePrecio){
        this.notificacion.set(`!Has llegado al precio de ${limitePrecio} euros!`);
      }else{
       this.notificacion.set(``);
      }
    }




  // contador = signal(20);
  // incremento = signal(1);
  // contadorX3 = computed(() => this.contador() * 3);

  // aumentar(){
  //   // this.contador.set(this.contador() + 1);
  //   this.contador.update(contadorActual => contadorActual + 1);
  // }

  // ngOnInit(){
  //   console.log("La aplicacion ha cargado!!");
  // }

  // ngDoCheck(){
  //   console.log("Ha cambiado algo en el componente");
  // }
}
