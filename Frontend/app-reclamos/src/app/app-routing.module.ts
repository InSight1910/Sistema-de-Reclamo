import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AdminComponent } from './components/admin/admin.component';
import { VerReclamosComponent } from './components/ver-reclamos/ver-reclamos.component';
import { IngresarReclamoComponent } from './components/ingresar-reclamo/ingresar-reclamo.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "usuario", component: UsuarioComponent },
  { path: "admin", component: AdminComponent },
  { path: "verReclamos", component: VerReclamosComponent },
  { path: "ingresarReclamo", component: IngresarReclamoComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
