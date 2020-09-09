import { Component, OnInit, Input  } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})


export class UsuarioComponent implements OnInit {
  newUsuario: Usuario;
  usuarios: Usuario  = {
    correo: null,
    nombre: null,
    contrasenha: null,
    rut: null,
    rol: null,
    numTelefono: null,
    direccion: null
  };



  constructor(private service: ReclamoService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatosUsuario();

  }

  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.service.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
  }

}
