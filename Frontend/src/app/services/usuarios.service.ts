import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  api = 'http://localhost:8080/';
  //Methods GET
  obtenerUsuarioPorId( rut ): Observable<Usuario[]> {
    return this.http.get< Usuario[]>(`${this.api}usuarios/${rut}`);
  }
  //Methods POST
  registrarUsuario( user: Usuario ) {
    return this.http.post(`${this.api}registrar`, user);
  }
  loginUsuario( user: Usuario ): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.api}loginUsuario`, user);
  }
  loginAdmin( user: Usuario ): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.api}loginAdmin`, user);
  }
  //Methods PUT
  cambiarContraseña( usuario: Usuario ) {
    return this.http.put(`${this.api}usuario/editarContraseña`, usuario);
  }
  editarPerfil(usuario: Usuario) {
    return this.http.put<Usuario>(`${this.api}editarUsuario`, usuario);
  }
  //Methods PUT
  asignarReclamo( usuario: Usuario, i) {
    return this.http.put(`${this.api}asignarReclamos/${i}`, usuario)
  }
  //Methods DELETE
  eliminarUsuario( rut) {
    return this.http.delete(`${this.api}borrarUser/${rut}`)
  }
  eliminarUsuarioPorCorreo(correo: string) {
    const url = "borrarUserCorreo/"
    return this.http.delete(this.api+url+correo)
  }
}
