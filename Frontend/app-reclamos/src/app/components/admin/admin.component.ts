import { Component, OnInit } from '@angular/core';
import { ReclamoService } from "../../services/reclamo.service";
import { Usuario } from '../../interfaces/usuario.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  columnasAMostrar: string[] = ['correo', 'nombre', 'contrasenha', 'rut', 'rol']
  usuarios: Usuario[] = [];


  //Constructor
  constructor(private service: ReclamoService) { }

  ngOnInit(): void {
    this.service.obtenerUsuario().subscribe(usuario => this.usuarios = usuario);
    console.log(this.usuarios);
  }

}