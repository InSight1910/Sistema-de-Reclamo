import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import swal from 'sweetalert';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  @Input() usuario: Usuario;
  constructor(private service: UsuariosService, private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;


  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

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

  }
  onSubmit(){
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if(this.form.valid){
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        let usuario: Usuario = {
          correo: username,
          contrasenha: password
        } as Usuario;
        this.authService.loginAdmin(usuario).subscribe(userResponse => {
          localStorage.setItem("usuario", JSON.stringify(userResponse));
          this.router.navigate(['inicioAdmin']);
        });
      }
      catch (err) {
        console.log(err);
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
