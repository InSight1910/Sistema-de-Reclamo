import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamo } from "../interfaces/reclamo.model";

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  constructor(private http: HttpClient) { }

  //Link base
  api = 'http://localhost:8080/'

  //Methods GET
  obtenerAllAdmin(): Observable<Reclamo[]> {
	  return this.http.get<Reclamo[]>(`${this.api}allAdmin`)
  }
  obtenerAdmin(rut): Observable<Reclamo[]> {
    return this.http.get<Reclamo[]>(`${this.api}reclamosAdmin/${rut}`)
  }
  obtenerReclamosPorRut(rut): Observable<Reclamo[]> {
    return this.http.get<Reclamo[]>(`${this.api}allUser/${rut}`)
  }
  obtenerReclamoPorNumreclamo(numeroReclamo): Observable<Reclamo[]> {
    return this.http.get<Reclamo[]>(`${this.api}allReclamo/${numeroReclamo}`)
  }

  //Methods PUT
  updateEstado(numeroReclamo) {
    return this.http.put(`${this.api}updateEstado/${numeroReclamo}`,numeroReclamo)
  }
  actualizarAntecedente(reclamo: Reclamo) {
    return this.http.put(`${this.api}insertarAntecedentes`, reclamo)
  }
  addComentarioUser(reclamo: Reclamo) {
    return this.http.put<Reclamo>(`${this.api}insertarComentario/`, reclamo)
  }
  editarReclamoUser(reclamo: Reclamo) {
    return this.http.put<Reclamo>(`${this.api}editarReclamo/`, reclamo)
  }

  //Methods DELETE

  borrarReclamo(numeroReclamo) {
    return this.http.delete(`${this.api}delete/${numeroReclamo}`)
  }
  borrarReclamoRespuesta(numeroReclamo) {
    return this.http.delete(`${this.api}borrarReclamoRespuesta/${numeroReclamo}`)
  }

  //Methods CREATE
  ingresarReclamo(reclamo: Reclamo) {
    return this.http.post(`${this.api}create`, reclamo)
  }


}
