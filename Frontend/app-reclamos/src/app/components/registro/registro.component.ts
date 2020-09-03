import { Component, OnInit } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { RouteReuseStrategy, Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: Usuario;
  rut;
  usuario;
  direccion;
  numerotelefono;
  correo;
  contrasenha;
  hasLower: boolean = false;
  hasNum: boolean = false;

  constructor(private service: ReclamoService, private router: Router) { }

  ngOnInit(): void {
  }

  registrarUsuario() {
    this.user = {
      rut: this.rut,
      nombre: this.usuario,
      direccion: this.direccion,
      numTelefono: this.numerotelefono,
      correo: this.correo,
      contrasenha: this.contrasenha,
      rol: ''
    }
    if(!this.rut){
      alert("Rut vacio");
      return;
    }
    if(!this.usuario){
      alert("Nombre vacio");
      return;
    }
    if(!this.direccion){
      alert("Dirección vacia");
      return;
    }
    if(!this.numerotelefono){
      alert("Número de teléfono vacio");
      return;
    }
    if(!this.correo){
      alert("Correo vacio");
      return;
    }
    if(!this.contrasenha){
      alert("Contraseña vacia");
      return;
    }
    
    const numRegex = new RegExp("(?=.*\\d)"); // Que tenga al menos un num
    if (numRegex.test(this.contrasenha)) {
      this.hasNum = true;
      

      const lowercaseRegex = new RegExp("(?=.*[a-z])");// Al menos una letra baja
      if(lowercaseRegex.test(this.contrasenha)){
        this.hasLower = true;
        
      }
    
    }else{
      alert("La contraseña necesita tener al menos una letra y un número");
      return;
    }


    
    this.service.registrarUsuario(this.user).subscribe(
      _ => {alert("Registro exitoso"); this.router.navigate(['usuario'])},
      error => {alert("Este correo ya se encuentra en uso")} 
    )
  }
}
