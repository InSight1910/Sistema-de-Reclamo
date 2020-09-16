import { Component, OnInit } from '@angular/core';
import { Reclamo } from 'src/app/interfaces/reclamo.model';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-respuesta-admin',
  templateUrl: './respuesta-admin.component.html',
  styleUrls: ['./respuesta-admin.component.css']
})
export class RespuestaAdminComponent implements OnInit {

  constructor(private service: ReclamoService) { }

  ngOnInit(): void {
    this.obtenerDatosUsuario();
    this.obtenerDatosReclamo();
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

  reclamo: Reclamo = {
    tipoReclamo: null,
    numeroReclamo: null,
    descripcion: null,
    fecha: null,
    estado: null,
    antecendentes: null,
    rut: null,
    comentarios: null,
    fechaTope: null
  };

  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.service.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
  }

  obtenerDatosReclamo() {
    const n = JSON.parse(localStorage.getItem('reclamo')).numeroReclamo
    this.service.obtenerReclamoPorNumreclamo(n).subscribe(reclamo => this.reclamo = reclamo[0]);
    console.log()
  }
}
