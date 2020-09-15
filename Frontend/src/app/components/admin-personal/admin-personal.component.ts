import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reclamo } from 'src/app/interfaces/reclamo.model';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-admin-personal',
  templateUrl: './admin-personal.component.html',
  styleUrls: ['./admin-personal.component.css']
})
export class AdminPersonalComponent implements OnInit {

  constructor(private service: ReclamoService) { }


  columnShow = ['tipoReclamo', 'numeroReclamo', 'fecha', 'estado', 'rut'];
  columns = [
    { name: 'tipoReclamo', title: 'Tipo Reclamo' },
    { name: 'numeroReclamo', title: 'Numero Reclamo' },
    { name: 'fecha', title: 'Fecha' },
    { name: 'estado', title: 'Estado' },
    { name: 'rut', title: 'Rut' }
  ];
  usuarios: Usuario = {
    correo: null,
    nombre: null,
    contrasenha: null,
    rut: null,
    rol: null,
    numTelefono: null,
    direccion: null
  };
  data: Reclamo[] = [];
  dataSource = new MatTableDataSource(this.data)

  ngOnInit(): void {
    this.obtenerDatosUsuario()




  }


  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.service.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
    console.log(rut)
    this.service.obtenerAdmin(rut).subscribe(
      usuario => {
        this.data = usuario;
        this.dataSource = new MatTableDataSource(this.data);
      });
  }


}
