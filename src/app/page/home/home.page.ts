import { Component } from '@angular/core';
// importar controlador de navegacion
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // crear un objeto del tipo NavController
  constructor(private navCtrl:NavController) {}

  pinchoBoton(){
    // llamar al metodo navigateForward para
    // pasar de pagina
    this.navCtrl.navigateForward("pagina1");
  }
}
