import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() datos: Usuario[];
  constructor() { }

  ngOnInit(): void {
  }

}
