import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamo } from 'src/app/interfaces/reclamo.model';
import { Respuesta } from 'src/app/interfaces/respuesta.model';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-respuesta-admin',
  templateUrl: './respuesta-admin.component.html',
  styleUrls: ['./respuesta-admin.component.css']
})
export class RespuestaAdminComponent implements OnInit {

  constructor(private service: ReclamoService, private router: Router) { }
  @Input() respuestas: Respuesta
  ngOnInit(): void {
    this.obtenerDatosUsuario();

 
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

  nreclamo;
  texto;

  

  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.service.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
  }

  

  IngresarRespuesta (numeroReclamo: number, rut: string, texto: string) : void {
    this.service.crearRespuesta({numeroReclamo, rut, texto} as Respuesta).subscribe()
    
  }
}
