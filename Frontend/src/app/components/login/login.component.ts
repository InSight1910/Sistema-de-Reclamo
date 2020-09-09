import { Component, OnInit, Input } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import swal from 'sweetalert';
import { AuthService } from '../../services/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() usuario: Usuario;
  constructor(private fb: FormBuilder, private service: ReclamoService, private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'usuario';
  }

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  loginUsuario(correo: String, contrasenha: String) {

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
  }
  /*
      verificación de logueo */

  onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;

        let usuario: Usuario = { correo: username, contrasenha: password } as Usuario;
        this.authService.loginUsuario(usuario).subscribe(userResponse => {
          localStorage.setItem("usuario", JSON.stringify(userResponse));
          this.router.navigate(['usuario'])
        });

      } catch (err) {
        console.log(err);
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}



