import { Component, OnInit, Input } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() usuario : Usuario;
  constructor(private service: ReclamoService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUsuario(correo: String, contrasenha: String){

    /* ningun campo vacío */
    if(!correo.trim()){
      alert("Campo correo vacio");
    }
    else if(!contrasenha.trim()){
      alert("Campo contraseña vacio");
    }
    
/* 
    verificación de logueo */
    else{
      let usuarioDatos = JSON.parse(localStorage.getItem("usuario"));
      this.service.loginUsuario({correo, contrasenha} as Usuario).subscribe(_ => { alert("Logueo exitoso"); this.router.navigate(['usuario'])},  error => {alert("Los datos no coinciden")})
    }
  }

}
