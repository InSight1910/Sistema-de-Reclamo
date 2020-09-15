import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  api = "http://localhost:8080/";
  loginUsuario(usuario: Usuario): Observable<Usuario> {
    const url = 'loginUsuario/';
    return this.http.post<Usuario>(this.api + url, usuario);
  }
  loginAdmin(usuario: Usuario): Observable<Usuario> {
    const url = 'loginAdmin/';
    return this.http.post<Usuario>(this.api + url, usuario);
  }

  public   isAuthenticated(): boolean{
    const token = localStorage.getItem('usuario');
    if (token != null){
      return true;
    }
    return false;
  }
}

