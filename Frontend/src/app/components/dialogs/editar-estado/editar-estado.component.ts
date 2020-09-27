import { Component, OnInit, Inject } from '@angular/core';
import { ReclamosService } from 'src/app/services/reclamos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {

  constructor(private service: ReclamosService, private dialogRef: MatDialogRef<EditarEstadoComponent>, @Inject(MAT_DIALOG_DATA) data) {this.values = data }
  values;
  ngOnInit(): void {
  }

  editarEstado(){
    this.service.updateEstado(this.values.numero).subscribe();
  }

}
