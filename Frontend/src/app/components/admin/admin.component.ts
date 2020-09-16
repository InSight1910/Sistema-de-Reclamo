import { Component, OnInit } from '@angular/core';
import { ReclamoService } from "../../services/reclamo.service";
import { Usuario } from '../../interfaces/usuario.model';
import { MatTableDataSource } from '@angular/material/table';
import { Reclamo } from 'src/app/interfaces/reclamo.model';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EditarEstadoComponent } from '../dialogs/editar-estado/editar-estado.component';
import { ViewReclamoComponent } from '../dialogs/view-reclamo/view-reclamo.component';
import { AsignarReclamoComponent } from '../dialogs/asignar-reclamo/asignar-reclamo.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  columnasAMostrar: string[] = ['tipoReclamo', 'numeroReclamo', 'fecha', 'estado', 'rut'];
  columnas = [
    { name: 'tipoReclamo', title: 'Tipo Reclamo' },
    { name: 'numeroReclamo', title: 'Numero Reclamo' },
    { name: 'fecha', title: 'Fecha' },
    { name: 'estado', title: 'Estado' },
    { name: 'rut', title: 'Rut' }
  ]
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
    direccion: null
  };

  //Constructor
  constructor(private service: ReclamoService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.service.obtenerAllAdmin().subscribe(
      usuario => {
        this.datas = usuario;
        this.dataSource = new MatTableDataSource(this.datas);
      });
  }
  openEstado(reclamo) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.data = {
      numero: reclamo.numeroReclamo
    };
    const dialogRef = this.dialog.open(EditarEstadoComponent, dialogconfig);

  }

  borrarReclamo(reclamo, i) {


    this.service.borrarReclamo(reclamo.numeroReclamo).subscribe(_ => this.obtenerReclamoAct())

    this.datas.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.datas);
  }



  obtenerReclamoAct() {
    this.service.obtenerAllAdmin().subscribe(reclamos => this.datas = reclamos);
  };

  searchDef(filterValue) {
    this.dataSource.filterPredicate = (data: Reclamo, filter: string) => {
      return data.numeroReclamo.toString() === filter || data.rut === filter;
    };

    this.dataSource.filter = filterValue;

  }
  openView(reclamo) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.data = reclamo;
    const dialogRef = this.dialog.open(ViewReclamoComponent, dialogconfig);
  }
  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.service.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
  }
  openAsignAdmin(reclamo: Reclamo){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.data = reclamo.numeroReclamo;
    const dialogRef = this.dialog.open(AsignarReclamoComponent, dialogconfig)
  }

  logout() {
    localStorage.removeItem("usuario");
    this.router.navigate(['home'])
  }

}
