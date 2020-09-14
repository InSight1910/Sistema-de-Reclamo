import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-ingresar-reclamo',
  templateUrl: './ingresar-reclamo.component.html',
  styleUrls: ['./ingresar-reclamo.component.css']
})
export class IngresarReclamoComponent implements OnInit {
 
  constructor(private router: Router, private service: ReclamoService, private ruta: ActivatedRoute) { }

  usuarios: Usuario = {
    correo: null,
    nombre: null,
    contrasenha: null,
    rut: null,
    rol: null,
    numTelefono: null,
    direccion: null
  };
  ngOnInit(): void {
    this.obtenerDatosUsuario();

  }

  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.service.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
  }

}
