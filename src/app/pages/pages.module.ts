import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InicioComponent } from './inicio/inicio.component'
import { ContactoComponent } from './contacto/contacto.component'
import { NopagefoundComponent } from './nopagefound/nopagefound.component'
import { ComponentsModule } from '../components/components.module';
import { ConocenosComponent } from './conocenos/conocenos.component'

@NgModule({
  declarations: [InicioComponent, ContactoComponent, NopagefoundComponent, ConocenosComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
