import { Component, OnInit } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { RouteReuseStrategy, Router } from '@angular/router';
import swal from 'sweetalert'
import { ReadKeyExpr } from '@angular/compiler';



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
      swal('Campo vacio',
      'Por favor ingresa tu rut',
      'error')
      return;
    }
    if(!this.usuario){
      swal('Campo vacio',
      'Por favor ingresa tu nombre',
      'error')
      return;
    }
    if(!this.direccion){
      swal('Campo vacio',
      'Por favor ingresa tu dirección',
      'error')
      return;
    }
    if(!this.numerotelefono){
      swal('Campo vacio',
      'Por favor ingresa tu número de télefono',
      'error')
      return;
    }
    if(!this.correo){
      swal('Campo vacio',
      'Por favor ingresa tu correo',
      'error')
      return;
    }
    if(!this.contrasenha){
      swal('Campo vacio',
      'Por favor ingresa tu contraseña',
      'error')
      return;
    }
    
    const numRegex = new RegExp("(?=.*\\d)"); // Que tenga al menos un num
    if (numRegex.test(this.contrasenha)) {
      this.hasNum = true;
      

      const lowercaseRegex = new RegExp("(?=.*[a-z])");// Al menos una letra baja
      if(lowercaseRegex.test(this.contrasenha)){
        this.hasLower = true;
        
      }

      const emailValido = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(emailValido.test(this.contrasenha)){
        swal('¡Error!',
      'Ingresa un correo válido. Ej: example@example.com',
      'error')
      return;
      }
    
    }else{
      swal('¡Contraseña débil!',
      'Tu contraseña debe tener al menos: 4 carácteres, una letra y un número',
      'error')
      return;
    }


    
    this.service.registrarUsuario(this.user).subscribe(
      _ => {swal('¡Yayy!', 'Gracias por registrarte, esperamos que disfrutes de nuestros servicios', 'success'); this.router.navigate(['usuario'])},
      error => {swal('Este correo ya se encuentra en uso, o ingresaste un formato equivocado', 'error')} 
    )
  }
}
