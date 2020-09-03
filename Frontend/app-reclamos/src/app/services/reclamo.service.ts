import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.model';
import { Reclamo } from "../interfaces/reclamo.model";
import { UsuarioComponent } from '../components/usuario/usuario.component';

@Injectable({
  providedIn: 'root'
})
export class ReclamoService {
  constructor(private http: HttpClient) { }


  obtenerUserURL = "http://localhost:8080/usuarios/13190294-8";
  obtenerAdminURL = "http://localhost:8080/allAdmin";
  registroUserURL = "http://localhost:8080/registrar";
  api = "http://localhost:8080/";
  updateEstados = "http://localhost:8080/updateEstado/"

  obtenerAllAdmin(): Observable<Reclamo[]> {
    const url = "allAdmin"
    return this.http.get<Reclamo[]>(this.api+url);
  }

  obtenerUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.obtenerUserURL);
  }

  registrarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.registroUserURL, usuario);

  }

  loginUsuario(usuario: Usuario): Observable<Usuario> {
    const url = 'loginUsuario/'
    return this.http.post<Usuario>(this.api+url, usuario);
  }

  obtenerUsuarioPorId(rut): Observable<Usuario>{
    const suffix = 'usuarios/'
    return this.http.get<Usuario>(this.api+suffix+rut)
  }
  updateEstado(numeroReclamo){
    return this.http.put(`${this.updateEstados}${numeroReclamo}`,numeroReclamo)
  }
}
