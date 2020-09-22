import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { ReclamoService } from 'src/app/services/reclamo.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-asignar-reclamo',
  templateUrl: './asignar-reclamo.component.html',
  styleUrls: ['./asignar-reclamo.component.css']
})
export class AsignarReclamoComponent implements OnInit {

  constructor(private service: ReclamoService, private dialogref: MatDialogRef<AsignarReclamoComponent>, @Inject(MAT_DIALOG_DATA) data) { this.values = data }
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
  mensaje =  new EventEmitter<boolean>();


  ngOnInit(): void {
    this.obtenerDatosUsuario();
  }
  obtenerDatosUsuario() {
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.service.obtenerUsuarioPorId(rut).subscribe(usuario => this.usuarios = usuario[0]);
  }
  asignarReclamo(){
    this.service.asignarReclamo(this.usuarios, this.values).subscribe(_ => swal('Reclamo asignado',
    '¡Manos a la obra!',
    'success'))
    this.acepto = true
    return this.mensaje.emit(this.acepto);
  }

}
