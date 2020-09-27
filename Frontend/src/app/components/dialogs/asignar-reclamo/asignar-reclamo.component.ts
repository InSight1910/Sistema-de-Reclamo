import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignar-reclamo',
  templateUrl: './asignar-reclamo.component.html',
  styleUrls: ['./asignar-reclamo.component.css']
})
export class AsignarReclamoComponent implements OnInit {

  constructor(private router: Router, private service: UsuariosService, private dialogref: MatDialogRef<AsignarReclamoComponent>, @Inject(MAT_DIALOG_DATA) data) { this.values = data }
  values;
  usuarios: Usuario = {
    correo: null,
    nombre: null,
    contrasenha: null,
    rut: null,
    rol: null,
    numTelefono: null,
    direccion: null
  };
  acepto = false;
  @Output()
  mensaje = new EventEmitter<boolean>();


  ngOnInit(): void {
    this.obtenerDatosUsuario();
  }
  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.service.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
  }
  asignarReclamo() {
    this.service.asignarReclamo(this.usuarios, this.values).subscribe(_ => {
      swal('Reclamo asignado',
        '¡Manos a la obra!',
        'success'); this.router.navigate(['inicioAdmin'])
    })
    this.acepto = true
    return this.mensaje.emit(this.acepto);
  }

}
