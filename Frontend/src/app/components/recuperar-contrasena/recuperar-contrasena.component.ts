import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/interfaces/usuario.model';
import swal from 'sweetalert'
@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {

  }

  contrasenha;
  hasLower: boolean = false;
  hasNum: boolean = false;

  recuperar(correo, contrasenha){

      
    this.service.cambiarContraseña({correo, contrasenha} as Usuario).subscribe(data => console.log(data));

  }
}

