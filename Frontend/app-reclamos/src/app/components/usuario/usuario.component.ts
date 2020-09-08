import { Component, OnInit, Input  } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})


export class UsuarioComponent implements OnInit {
  newUsuario: Usuario;
  @Input() usuario: Usuario = this.newUsuario;



  constructor(private service: ReclamoService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDatosUsuario();
  }

  obtenerDatosUsuario() {
    const rut = +this.ruta.snapshot.paramMap.get('rut');
    this.service.obtenerUsuarioPorId(rut).subscribe(usuario => this.newUsuario  = usuario);
  }

}
