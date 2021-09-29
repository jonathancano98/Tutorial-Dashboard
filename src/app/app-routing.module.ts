import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { VerComponent } from './ver/ver.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login',pathMatch: 'full'},
  {path: 'profesor', component: ProfesorComponent},
  {path: 'alumno/:nombre', component: AlumnoComponent},
  {path: 'ver/:nombre', component: VerComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
