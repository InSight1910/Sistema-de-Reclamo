import { Component, OnInit, Input } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import swal from 'sweetalert';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  @Input() usuario: Usuario;
  constructor(private service: ReclamoService, private router: Router) { }

  ngOnInit(): void {
  }

  loginAdmin(correo: String, contrasenha: String) {

    /* ningun campo vacío */
    if (!correo.trim()) {
      swal('¡Oh no!',
        'Por favor ingresa tu correo',
        'error'
      )
    }
    else if (!contrasenha.trim()) {
      swal('Campo vacio',
        'Por favor ingresa tu contraseña',
        'error')
    }

    /*
        verificación de logueo */
    else {
      this.service.loginAdmin({ correo, contrasenha } as Usuario).subscribe(userResponse => {

        this.router.navigate(["admin"]);
      });
    }
  }
}
