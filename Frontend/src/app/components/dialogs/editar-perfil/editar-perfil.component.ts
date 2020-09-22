import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import swal from 'sweetalert'


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
usuarios: any;
  constructor(private router: Router, private usuarioService: ReclamoService,  private dialogRef: MatDialogRef<EditarPerfilComponent>,
    @Inject(MAT_DIALOG_DATA) data){this.usuarios = data}

  ngOnInit(): void {
  }

  guardar(){
    this.usuarioService.editarPerfil(this.usuarios).subscribe(data => console.log(data))
  }

  borrarPorCorreo(){
    const correo = JSON.parse(localStorage.getItem('usuario')).correo
    this.usuarioService.eliminarUsuarioPorCorreo(correo).subscribe(_ => {swal('Fue un gusto ayudarte',
    'Esperamos vuelvas pronto a utilizar nuestro servicios'); this.router.navigate(['home'])})
  }

  borrar(){
    const rut = JSON.parse(localStorage.getItem('usuario')).rut
    this.usuarioService.eliminarUsuario(rut).subscribe(_ => {swal('Fue un gusto ayudarte',
    'Esperamos vuelvas pronto a utilizar nuestro servicios'); this.router.navigate(['home'])})
  }
} 

