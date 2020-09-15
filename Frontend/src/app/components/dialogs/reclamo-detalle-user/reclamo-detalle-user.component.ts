import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReclamoService } from 'src/app/services/reclamo.service';


@Component({
  selector: 'app-reclamo-detalle-user',
  templateUrl: './reclamo-detalle-user.component.html',
  styleUrls: ['./reclamo-detalle-user.component.css']
})
export class ReclamoDetalleUSerComponent implements OnInit {

  constructor(private service: ReclamoService, private dialogRef: MatDialogRef<ReclamoDetalleUSerComponent>, @Inject(MAT_DIALOG_DATA) data) {this.values = data }

  values;
  ngOnInit(): void {
  }

  guardar(){
    this.service.editarReclamoUser(this.values).subscribe(data => console.log(data))

  }


}
