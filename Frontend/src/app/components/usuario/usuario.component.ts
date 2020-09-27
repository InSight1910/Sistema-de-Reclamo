import { Component, OnInit, Input } from '@angular/core';
import { ReclamosService } from '../../services/reclamos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditarPerfilComponent } from '../dialogs/editar-perfil/editar-perfil.component';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})


export class UsuarioComponent implements OnInit {
  newUsuario: Usuario;
  usuarios: Usuario = {
    correo: null,
    nombre: null,
    contrasenha: null,
    rut: null,
    rol: null,
    numTelefono: null,
    direccion: null
  };

  user: Usuario[];

  constructor(private router: Router, private service: ReclamosService, private ruta: ActivatedRoute, private dialog: MatDialog, private serviceUser: UsuariosService) { }


  ngOnInit(): void {
    this.obtenerDatosUsuario();
    this.url()
  }

  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.serviceUser.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
  }


  logout() {
    localStorage.removeItem("usuario");
    this.router.navigate(['home'])
  }

  openEditar(usuarios) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.data = usuarios;
    const dialogRef = this.dialog.open(EditarPerfilComponent, dialogconfig);

  }


  url(){
    let iniciado = false;
    let datos = JSON.parse(localStorage.getItem("usuario"))
    if (datos){
      iniciado = true;
      return iniciado;
    } else {
      return iniciado
    }
  }

}
