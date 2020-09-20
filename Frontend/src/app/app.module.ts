import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AdminComponent } from './components/admin/admin.component';
import { MaterialModule } from './material/material.module';
import { IngresarReclamoComponent } from './components/ingresar-reclamo/ingresar-reclamo.component';
import { VerReclamosComponent } from './components/ver-reclamos/ver-reclamos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarEstadoComponent } from './components/dialogs/editar-estado/editar-estado.component';
import { MatDialogModule } from "@angular/material/dialog";
import { routing, appRoutingProviders } from './app-routing.module';
import { ViewReclamoComponent } from './components/dialogs/view-reclamo/view-reclamo.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { EditarPerfilComponent } from './components/dialogs/editar-perfil/editar-perfil.component';
import { AsignarReclamoComponent } from './components/dialogs/asignar-reclamo/asignar-reclamo.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { AdminPersonalComponent } from './components/admin-personal/admin-personal.component';
import { ReclamoDetalleUSerComponent } from './components/dialogs/reclamo-detalle-user/reclamo-detalle-user.component';
import { RespuestaAdminComponent } from './components/respuesta-admin/respuesta-admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    UsuarioComponent,
    AdminComponent,
    IngresarReclamoComponent,
    VerReclamosComponent,
    EditarEstadoComponent,
    ViewReclamoComponent,
    LoginAdminComponent,
    RecuperarContrasenaComponent,
    PreguntasFrecuentesComponent,
    SobreNosotrosComponent,
    FooterComponent,
    EditarPerfilComponent,
    AsignarReclamoComponent,
    InicioAdminComponent,
    AdminPersonalComponent,
    ReclamoDetalleUSerComponent,
    RespuestaAdminComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    routing,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
