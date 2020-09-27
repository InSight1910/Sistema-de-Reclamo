import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { ReclamosService } from 'src/app/services/reclamos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css']
})
export class InicioAdminComponent implements OnInit {

  constructor(private router: Router, private service: ReclamosService, private serviceUser: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerDatosUsuario();
  }
  usuarios: Usuario = {
    correo: null,
    nombre: null,
    contrasenha: null,
    rut: null,
    rol: null,
    numTelefono: null,
    direccion: null
  };
  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.serviceUser.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
  }
  logout() {
    localStorage.removeItem("usuario");
    this.router.navigate(['home'])
  }


}
