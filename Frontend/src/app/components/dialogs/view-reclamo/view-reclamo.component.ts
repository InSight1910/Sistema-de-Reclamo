import { Component, OnInit, Inject } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-reclamo',
  templateUrl: './view-reclamo.component.html',
  styleUrls: ['./view-reclamo.component.css']
})
export class ViewReclamoComponent implements OnInit {

  constructor(private service: ReclamoService, private dialogRef: MatDialogRef<ViewReclamoComponent>, @Inject(MAT_DIALOG_DATA) data) {this.values = data }
  values;



  ngOnInit(): void {
    console.log(this.values)
  }


}
