import { Component, OnInit } from '@angular/core';
import { ReclamoService } from "../../services/reclamo.service";
import { Usuario } from '../../interfaces/usuario.model';
import { MatTableDataSource } from '@angular/material/table';
import { Reclamo } from 'src/app/interfaces/reclamo.model';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EditarEstadoComponent } from '../dialogs/editar-estado/editar-estado.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  columnasAMostrar: string[] = ['tipoReclamo', 'numeroReclamo', 'descripcion', 'fecha', 'estado', 'antecedentes', 'rut', 'opciones'];
  columnas = [
    {name: 'tipoReclamo', title: 'Tipo Reclamo'},
    {name: 'numeroReclamo', title: 'Numero Reclamo'},
    {name: 'descripcion', title: 'Descripcion'},
    {name: 'fecha', title: 'Fecha'},
    {name: 'estado', title: 'Estado'},
    {name: 'antecedentes', title: 'Antecedentes'},
    {name: 'rut', title: 'Rut'},

  ]
  data: Reclamo[] = [];
  dataSource = new MatTableDataSource(this.data);

  //Constructor
  constructor(private service: ReclamoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.obtenerAllAdmin().subscribe(
      usuario => {
        this.data = usuario;
        this.dataSource = new MatTableDataSource(this.data);
    });

  }
  openEstado(reclamo){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.data = {
      numero: reclamo.numeroReclamo
    };
    console.log(dialogconfig.data );
    const dialogRef = this.dialog.open(EditarEstadoComponent, dialogconfig);
  }

}
