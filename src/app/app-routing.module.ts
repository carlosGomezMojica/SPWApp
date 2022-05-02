import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UsuarioComponent } from './modules/usuario/usuario.component'
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: '',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
