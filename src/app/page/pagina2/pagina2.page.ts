import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  async mensajeEliminar(nombreMasc){
    const alerta = await this.alertCtrl.create({
      header:'Eliminar',
      message:'Desea elimnar reg '+nombreMasc,
      buttons:[
        {text:'Cancelar',role:'cancel',handler:()=>{ console.log('eres gallina') }},
        {text:'Aceptar',role:'confirm',handler:()=>{ this.eliminar(nombreMasc); }}
      ]
    });
    await alerta.present();
  }

  ngOnInit() {
    this.listar();
  }

  lista_mascotas = new Array();

  listar() {
    var datos = localStorage.getItem("datos");
    datos = datos.replace("[", "");
    datos = datos.replace("]", "");
    datos = datos.split("},{").join("};{");
    var arreglo = datos.split(";");
    for (let index = 0; index < arreglo.length; index++) {
      var reg = JSON.parse(arreglo[index]);
      this.lista_mascotas.push(reg);
    }
  }
  eliminar(nombreMasc) {
    var datos = localStorage.getItem("datos");
    this.lista_mascotas=new Array(); // borrar la lista actual
    datos = datos.replace("[", "");
    datos = datos.replace("]", "");
    datos = datos.split("},{").join("};{");
    var arreglo = datos.split(";");
    for (let index = 0; index < arreglo.length; index++) {
      var reg = JSON.parse(arreglo[index]);
      if (nombreMasc!=reg.nombreMas) {
        this.lista_mascotas.push(reg);  
      }
    }
    localStorage.setItem("datos",JSON.stringify(this.lista_mascotas));
  }

}
