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
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarEstadoComponent } from './components/dialogs/editar-estado/editar-estado.component';
import { MatDialogModule } from "@angular/material/dialog";
import { routing, appRoutingProviders } from './app-routing.module';
import { ViewReclamoComponent } from './components/dialogs/view-reclamo/view-reclamo.component';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    routing

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
