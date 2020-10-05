import { Component, OnInit } from '@angular/core';
import { ReclamosService } from '../../services/reclamos.service';
import { Usuario } from '../../interfaces/usuario.model';
import { MatTableDataSource } from '@angular/material/table';
import { Reclamo } from 'src/app/interfaces/reclamo.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  columnasAMostrar: string[] = [
    'tipoReclamo',
    'numeroReclamo',
    'fecha',
    'estado',
    'rut',
    'opciones',
  ];
  columnas = [
    { name: 'tipoReclamo', title: 'Tipo Reclamo' },
    { name: 'numeroReclamo', title: 'Numero Reclamo' },
    { name: 'fecha', title: 'Fecha' },
    { name: 'estado', title: 'Estado' },
    { name: 'rut', title: 'Rut' },
  ];
  search;
  datas: Reclamo[] = [];
  dataSource = new MatTableDataSource(this.datas);
  usuarios: Usuario = {
    correo: null,
    nombre: null,
    contrasenha: null,
    rut: null,
    rol: null,
    numTelefono: null,
    direccion: null,
  };

  //Constructor
  constructor(
    private service: ReclamosService,
    private dialog: MatDialog,
    private router: Router,
    private serviceUser: UsuariosService
  ) {}

  ngOnInit(): void {
    this.service.obtenerAllAdmin().subscribe((usuario) => {
      this.datas = usuario;
      this.dataSource = new MatTableDataSource(this.datas);
    });

    const rut = JSON.parse(localStorage.getItem('usuario')).rut;
    this.serviceUser
      .obtenerUsuarioPorId(rut)
      .subscribe((usuario) => (this.usuarios = usuario[0]));
  }

  obtenerReclamoAct() {
    this.service.obtenerAllAdmin().subscribe((reclamos) => {
      this.datas = reclamos;
      this.dataSource = new MatTableDataSource(this.datas);
    });
  }

  searchDef(filterValue) {
    this.dataSource.filterPredicate = (data: Reclamo, filter: string) => {
      return (
        filter.includes(data.rut) || data.numeroReclamo.toString() == filter
      );
    };

    this.dataSource.filter = filterValue;
  }

  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut;
    this.serviceUser
      .obtenerUsuarioPorId(rut)
      .subscribe((usuario) => (this.usuarios = usuario[0]));
  }

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['home']);
  }

  asignarReclamo(reclamo) {
    this.serviceUser
      .asignarReclamo(this.usuarios, reclamo.numeroReclamo)
      .subscribe((_) => {
        this.obtenerReclamoAct();
        swal('Reclamo asignado', '¡Manos a la obra!', 'success');
      });
  }
}
