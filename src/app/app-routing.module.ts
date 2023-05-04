import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './auth/login/login.component'
import { ConocenosComponent } from './pages/conocenos/conocenos.component'
import { InicioComponent } from './pages/inicio/inicio.component'
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component'

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'nopagefound', component: NopagefoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'nopagefound' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
