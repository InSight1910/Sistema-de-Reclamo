import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamo } from '../../interfaces/reclamo.model';
import { Usuario } from '../../interfaces/usuario.model';
import { ReclamosService } from '../../services/reclamos.service';
import { ReclamoDetalleUSerComponent } from '../dialogs/reclamo-detalle-user/reclamo-detalle-user.component';
import swal from 'sweetalert'
import { Respuesta } from 'src/app/interfaces/respuesta.model';

@Component({
  selector: 'app-ver-reclamos',
  templateUrl: './ver-reclamos.component.html',
  styleUrls: ['./ver-reclamos.component.css']
})
export class VerReclamosComponent implements OnInit {

  constructor(private service: ReclamosService, private ruta: ActivatedRoute, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.obtenerDatosUsuario();

  }

  columnasAMostrar: string[] = ['tipoReclamo', 'numeroReclamo', 'fecha', 'estado', 'rut', 'opciones'];
  columnas = [
    { name: 'tipoReclamo', title: 'Tipo Reclamo' },
    { name: 'numeroReclamo', title: 'Numero Reclamo' },
    { name: 'fecha', title: 'Fecha' },
    { name: 'estado', title: 'Estado' },
    { name: 'rut', title: 'Rut' }
  ]

  datas: Reclamo[] = [];
  dataSource = new MatTableDataSource(this.datas);

  usuario: Usuario;
  reclamo: Reclamo[];

   
  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut;
    this.service.obtenerReclamosPorRut(rut).subscribe(reclamo => {this.datas = reclamo; this.dataSource = new MatTableDataSource(this.datas)});;
  }

  borrarReclamo(reclamo, i) {

    this.service.borrarReclamo(reclamo.numeroReclamo).subscribe()

    this.datas.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.datas);
  }

  obtenerReclamoAct() {
    this.service.obtenerAllAdmin().subscribe(reclamos => {
      this.datas = reclamos
      this.dataSource = new MatTableDataSource(this.datas);
    });
  };

  openView(reclamo) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.data = reclamo;
    const dialogRef = this.dialog.open(ReclamoDetalleUSerComponent, dialogconfig);
  }

  actualizarResuelto(reclamo) {
    this.service.updateEstado(reclamo.numeroReclamo).subscribe(_ => swal('Reclamo resuelto',
    'Nos alegra haberlo ayudado',
    'success'));


    // no actualiza en tiempo real.
  }
}

