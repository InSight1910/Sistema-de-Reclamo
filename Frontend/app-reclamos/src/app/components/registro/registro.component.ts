import { Component, OnInit } from '@angular/core';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { Usuario } from 'src/app/interfaces/usuario.model';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: Usuario;
  rut;
  usuario;
  direccion;
  numerotelefono;
  correo;
  contrasenha;


  constructor(private service: ReclamoService) { }

  ngOnInit(): void {
  }

  registrarUsuario() {
    this.user = {
      rut: this.rut,
      nombre: this.usuario,
      direccion: this.direccion,
      numTelefono: this.numerotelefono,
      correo: this.correo,
      contrasenha: this.contrasenha,
      rol: ''
    }
    this.service.registrarUsuario(this.user).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

}
