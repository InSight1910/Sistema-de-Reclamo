import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.model';
import { Reclamo } from "../interfaces/reclamo.model";
import { Respuesta } from "../interfaces/respuesta.model";

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
  getUsuarioCorreo = "http://localhost:8080/usuario/correo/";
  updateEstados = "http://localhost:8080/updateEstado";
  obtenerReclamosRut = "http://localhost:8080/allUser/";
  updateContraseha = "http://localhost:8080/usuario/editarContraseña/";

  obtenerAllAdmin(): Observable<Reclamo[]> {
    return this.http.get<Reclamo[]>(this.obtenerAdminURL);
  }
  obtenerAdmin(rut): Observable<Reclamo[]> {
    const suffix = 'reclamosAdmin/';
    return this.http.get<Reclamo[]>(this.api + suffix + rut);
  }

  obtenerUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.obtenerUserURL);
  }

  registrarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.registroUserURL, usuario);
  }

  loginUsuario(usuario: Usuario): Observable<Usuario> {
    const url = 'loginUsuario';
    return this.http.post<Usuario>(this.api + url, usuario);
  }
  loginAdmin(usuario: Usuario): Observable<Usuario> {
    const url = 'loginAdmin'
    return this.http.post<Usuario>(this.api + url, usuario);
  }

  obtenerUsuarioPorId(rut): Observable<Usuario> {
    const suffix = 'usuarios/'
    return this.http.get<Usuario>(this.api + suffix + rut);
  }
  updateEstado(numeroReclamo) {
    return this.http.put(`${this.updateEstados}/${numeroReclamo}`, numeroReclamo);
  }

  borrarReclamo(NUMERORECLAMO: number): Observable<{}> {
    const url = "delete/"
    return this.http.delete(this.api + url + NUMERORECLAMO)
  }

  actualizarAntecedente(reclamo: Reclamo) {
      const url = "insertarAntecedente"
       return this.http.put<Reclamo>(this.api+url, reclamo)
    }


  cambiarContraseña(usuario: Usuario) {
    const url = '/usuario/editarContraseña';
    return this.http.put(this.api+url, usuario)

  }

  editarPerfil(usuario: Usuario) {
    const url = "/editarUsuario"
     return this.http.put<Usuario>(this.api+url, usuario)
  }

  eliminarUsuario(rut: string) {
    const url = "borrarUser/"
    return this.http.delete(this.api+url+rut)
  }

  ingresarReclamo(reclamo: Reclamo) {
    const url = "create"
    return this.http.post(this.api+url, reclamo)
  }
  asignarReclamo(usuario: Usuario, i){
    const url = "asignarReclamos/"
    return this.http.put(this.api + url + i, usuario)
  }
  obtenerReclamosPorRut(rut): Observable<Reclamo[]> {
    const suffix = 'allUser/'
    return this.http.get<Reclamo[]>(this.api+suffix+rut);
  }

  addComentarioUser(reclamo: Reclamo) {
    const url = 'insertarComentario/'
    return this.http.put<Usuario>(this.api+url, reclamo);
  }

  editarReclamoUser(reclamo: Reclamo) {
    const url = "editarReclamo/"
     return this.http.put<Reclamo>(this.api+url, reclamo)
  }

  obtenerReclamoPorNumreclamo(NUMERORECLAMO: number) {

    const url = "allReclamo/"
    return this.http.get<Reclamo[]>(this.api+url+NUMERORECLAMO)
  }

  crearRespuesta(respuesta: Respuesta) {
    const url = "createRespuesta/"
    return this.http.post(this.api+url, respuesta)
  }

}
