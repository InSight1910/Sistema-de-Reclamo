import { Component, OnInit, Input } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datoss: Usuario;
  constructor(private service: ReclamoService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUsuario(correo: String, contrasenha: String){

    /* ningun campo vacío */
    if(!correo.trim()){
      swal('¡Oh no!',
      'Por favor ingresa tu correo',
      'error'
      )
    }
    else if(!contrasenha.trim()){
      swal('Campo vacio',
      'Por favor ingresa tu contraseña',
      'error')
    }

/*
    verificación de logueo */
    else{
      let usuarioDatos = JSON.parse(localStorage.getItem("usuario"));
      this.service.loginUsuario({correo, contrasenha} as Usuario).subscribe(_ => { swal('¡Súper', 'Nos alegramos de tenerte de vuelta', 'success'); this.router.navigate(['usuario'])},  error => { swal('¡Ups!',
      'Los datos no coinciden, intenta de nuevo',
      'error');
    });
    }
  }

}
