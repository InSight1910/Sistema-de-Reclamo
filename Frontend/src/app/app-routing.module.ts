import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminComponent } from "./components/login-admin/login-admin.component";
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AdminComponent } from './components/admin/admin.component';
import { VerReclamosComponent } from './components/ver-reclamos/ver-reclamos.component';
import { IngresarReclamoComponent } from './components/ingresar-reclamo/ingresar-reclamo.component';
import { RecuperarContrasenaComponent } from "./components/recuperar-contrasena/recuperar-contrasena.component";
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "loginAdmin", component: LoginAdminComponent },
  { path: "recuperarContrasena", component: RecuperarContrasenaComponent },
  { path: "preguntasFrecuentes", component: PreguntasFrecuentesComponent },
  { path: "sobreNosotros", component: SobreNosotrosComponent },
  { path: "registro", component: RegistroComponent },
  { path: "admin", component: AdminComponent },
  { path: "verReclamos", component: VerReclamosComponent },
  { path: "ingresarReclamo", component: IngresarReclamoComponent },
  { path: 'usuario/:rut', component: UsuarioComponent }

];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
