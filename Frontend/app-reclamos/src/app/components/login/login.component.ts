import { Component, OnInit, Input } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import swal from 'sweetalert'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() usuario: Usuario;
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
      this.service.loginUsuario({correo, contrasenha} as Usuario).subscribe(userResponse => { 
        localStorage.setItem("usuario", JSON.stringify(userResponse));

        let usuarioDatos = JSON.parse(localStorage.getItem("usuario"));
        this.router.navigate(["usuario", usuarioDatos.rut]);

        console.log(localStorage.getItem("usuario"));
    });
    }
  }

}
