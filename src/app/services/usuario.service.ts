import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public apiUrl: string;

  constructor(private http: HttpClient){
    this.apiUrl = "https://reqres.in/";
  }

  getUsers(){
    console.log("Ejecutando peticion del metodo getUsers http!!");

    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1'
    });

    return this.http.get(this.apiUrl+"api/users?page=2", { headers: headers });
  }

  getUser(userId: number){
    console.log("Ejecutando peticion del metodo getUser http!!");

    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1'
    });

    return this.http.get(this.apiUrl+"api/users/"+userId, { headers: headers });
  }

  createUser(usuario: any){
    console.log("Ejecutando peticion del metodo createUser http!!");

    // const headers = new HttpHeaders({
    //   'x-api-key': 'reqres-free-v1'
    // });

    const opciones = {
      headers: new HttpHeaders({
        'Content-Type':"application/json",
        'Authotization':"TU_TOKEN", 
        'x-api-key': 'reqres-free-v1'
      })
    }

    // return this.http.post(this.apiUrl+"api/users/", usuario, opciones , { headers: headers });
    return this.http.post(this.apiUrl+"api/users/", usuario, opciones );
  }

}
