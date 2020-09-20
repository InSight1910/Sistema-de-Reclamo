import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private activedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.url()


  }
  logout() {
    localStorage.removeItem("usuario");
    this.router.navigate(['home'])
  }

  url(){
    let iniciado = false;
    let datos = JSON.parse(localStorage.getItem("usuario"))
    if (datos){
      iniciado = true;
      return iniciado;
    } else {
      return iniciado
    }
  }




}
