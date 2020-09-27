import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Reclamo } from 'src/app/interfaces/reclamo.model';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { ReclamosService } from 'src/app/services/reclamos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EditarEstadoComponent } from '../dialogs/editar-estado/editar-estado.component';
import { ViewReclamoComponent } from '../dialogs/view-reclamo/view-reclamo.component';

@Component({
  selector: 'app-admin-personal',
  templateUrl: './admin-personal.component.html',
  styleUrls: ['./admin-personal.component.css'],
})
export class AdminPersonalComponent implements OnInit {
  constructor(
    private service: ReclamosService,
    private dialog: MatDialog,
    private serviceUser: UsuariosService
  ) { }

  columnShow = [
    'tipoReclamo',
    'numeroReclamo',
    'fecha',
    'estado',
    'rut',
    'opciones',
  ];
  columns = [
    { name: 'tipoReclamo', title: 'Tipo Reclamo' },
    { name: 'numeroReclamo', title: 'Numero Reclamo' },
    { name: 'fecha', title: 'Fecha' },
    { name: 'estado', title: 'Estado' },
    { name: 'rut', title: 'Rut' },
  ];
  usuarios: Usuario = {
    correo: null,
    nombre: null,
    contrasenha: null,
    rut: null,
    rol: null,
    numTelefono: null,
    direccion: null,
  };
  data: Reclamo[] = [];
  dataSource = new MatTableDataSource(this.data);

  ngOnInit(): void {
    this.obtenerDatosUsuario();
  }

  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut;
    this.serviceUser
      .obtenerUsuarioPorId(rut)
      .subscribe((usuario) => (this.usuarios = usuario[0]));
    this.service.obtenerAdmin(rut).subscribe((usuario) => {
      this.data = usuario;
      this.dataSource = new MatTableDataSource(this.data);
    });
  }

  openEstado(reclamo) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.data = {
      numero: reclamo.numeroReclamo,
    };
    const dialogRef = this.dialog.open(EditarEstadoComponent, dialogconfig);
  }

  borrarReclamo(reclamo, i) {
    this.service
      .borrarReclamo(reclamo.numeroReclamo)
      .subscribe((_) => this.obtenerReclamoAct());

    this.data.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.data);
  }

  obtenerReclamoAct() {
    this.service
      .obtenerAllAdmin()
      .subscribe((reclamos) => (this.data = reclamos));
  }

  openView(reclamo) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.data = reclamo;
    const dialogRef = this.dialog.open(ViewReclamoComponent, dialogconfig);
  }
}
