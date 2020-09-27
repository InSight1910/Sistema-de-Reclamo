import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Respuesta } from 'src/app/interfaces/respuesta.model';
import { ReclamosService } from 'src/app/services/reclamos.service';
import { RespuestasService } from 'src/app/services/respuestas.service';


@Component({
  selector: 'app-reclamo-detalle-user',
  templateUrl: './reclamo-detalle-user.component.html',
  styleUrls: ['./reclamo-detalle-user.component.css']
})
export class ReclamoDetalleUSerComponent implements OnInit {

  constructor(private serviceR: RespuestasService, private service: ReclamosService, private dialogRef: MatDialogRef<ReclamoDetalleUSerComponent>, @Inject(MAT_DIALOG_DATA) data) {this.values = data }

  values;
  valueAns: Respuesta = {
    fecha_respuesta: null,
    n_reclamo: null,
    rut: null,
    texto: null
  };
  ngOnInit(): void {
    this.obtenerRespuestas()
  }


  guardar(){
    this.service.editarReclamoUser(this.values).subscribe(data => this.values = data)
  }
  obtenerRespuestas(){
    this.serviceR.obtenerRespuesta(this.values.numeroReclamo).subscribe(data => this.valueAns = data[0])

  }


}
