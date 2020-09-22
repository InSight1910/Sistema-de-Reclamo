import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Respuesta } from "../interfaces/respuesta.model";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  constructor(private http: HttpClient) { }
  api = 'http://localhost:8080/'

  //Method CREATE
  crearRespuesta(respuesta: Respuesta) {
    return this.http.post(`${this.api}createRespuesta/`, respuesta)
  }
  obtenerRespuesta(numeroReclamo): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.api}getRespuesta/${numeroReclamo}`)
  }

}
