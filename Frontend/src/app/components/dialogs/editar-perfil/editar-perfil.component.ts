import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { Router } from '@angular/router';

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
    
    this.usuarioService.eliminarUsuarioPorCorreo(this.usuarios.correo).subscribe(_ =>  this.router.navigate(['home']));
  }
}
