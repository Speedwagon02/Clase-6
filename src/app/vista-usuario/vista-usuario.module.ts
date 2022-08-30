import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaUsuarioPageRoutingModule } from './vista-usuario-routing.module';

import { VistaUsuarioPage } from './vista-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaUsuarioPageRoutingModule
  ],
  declarations: [VistaUsuarioPage]
})
export class VistaUsuarioPageModule {}
