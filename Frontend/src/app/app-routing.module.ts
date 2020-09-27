import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AdminComponent } from './components/admin/admin.component';
import { VerReclamosComponent } from './components/ver-reclamos/ver-reclamos.component';
import { IngresarReclamoComponent } from './components/ingresar-reclamo/ingresar-reclamo.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { AdminPersonalComponent } from './components/admin-personal/admin-personal.component';
import { RespuestaAdminComponent } from './components/respuesta-admin/respuesta-admin.component';
import { UsuarioGuard } from './Guard/Usuario/usuario.guard';
import { AdminGuard } from './Guard/Admin/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginAdmin', component: LoginAdminComponent },
  {
    path: 'recuperarContrasena',
    component: RecuperarContrasenaComponent,
  },
  {
    path: 'preguntasFrecuentes',
    component: PreguntasFrecuentesComponent,
  },
  {
    path: 'sobreNosotros',
    component: SobreNosotrosComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'verReclamos',
    component: VerReclamosComponent,
    canActivate: [UsuarioGuard],
  },
  {
    path: 'ingresarReclamo',
    component: IngresarReclamoComponent,
    canActivate: [UsuarioGuard],
  },
  {
    path: 'inicioAdmin',
    component: InicioAdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'AdminPersonal',
    component: AdminPersonalComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [UsuarioGuard],
  },
  {
    path: 'respuestaAdmin',
    component: RespuestaAdminComponent,
    canActivate: [AdminGuard],
  },
];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
