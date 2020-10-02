import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/interfaces/usuario.model';
import swal from 'sweetalert'
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {

  constructor(private service: UsuariosService, private router: Router) { }

  ngOnInit(): void {

  }

  contrasenha1;
  contrasenha;
  hasLower: boolean = false;
  hasNum: boolean = false;
  hide = true;

  recuperar(correo, contrasenha) {

    const numRegex = new RegExp("(?=.*\\d)");
    const lowercaseRegex = new RegExp("(?=.*[a-z])"); // Que tenga al menos un num
    if (numRegex.test(contrasenha) && lowercaseRegex.test(contrasenha) && contrasenha.length > 3) {
      this.hasNum = true;
      this.hasLower = true;

      this.service.cambiarContraseña({ correo, contrasenha } as Usuario).subscribe(_ => {
        swal('Cambio de contraseña exitoso',
          'Nos alegra que tengas una contraseña nueva',
          'success'); this.router.navigate(['login'])
      }, error => { swal('Este correo no existe', 'Por favor, ingrese un correo existente.', 'error') });

    }
    else {
      swal('¡Contraseña débil!',
        'Tu contraseña debe tener al menos: 4 carácteres, una letra y un número',
        'error')
      return;
    }


  }
}

