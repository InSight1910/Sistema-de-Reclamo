import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamo } from 'src/app/interfaces/reclamo.model';
import { Respuesta } from 'src/app/interfaces/respuesta.model';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { ReclamoService } from 'src/app/services/reclamo.service';
import swal from 'sweetalert'

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
  texto;
  n_reclamo
  usuarios: Usuario = {
    correo: null,
    nombre: null,
    contrasenha: null,
    rut: null,
    rol: null,
    numTelefono: null,
    direccion: null
  };

  respuesta: Respuesta = {
    n_reclamo: null,
    rut: null,
    texto: null,
    fecha_respuesta: null,

  }



  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.service.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
  }



  IngresarRespuesta (rut, n_reclamo, texto) : void {
    this.service.crearRespuesta({n_reclamo, rut, texto} as Respuesta).subscribe(_ => { swal('¡Genial!', 'La respuesta fue ingresada con éxito. El usuario podrá verla como "Antecedente", esperamos esto resuelva la inquietud del mismo. Sino, continúen la comunicación por correo eléctrónico o llamada telefónica', 'success'); this.router.navigate(['AdminPersonal'])});
  }
}
