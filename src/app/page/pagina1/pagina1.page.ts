import { Component, OnInit } from '@angular/core';
// importar control de navegacion
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  // crear las variables que permitan recuperar
  // los datos del HTML (vinculacion ngModel)
  nombre: String;
  nombreDueno: String;
  edad: number;

  // se creo un objeto del tipo NavController
  constructor(private navCrtl:NavController) { }
  // metodo de inicio de la pagina
  ngOnInit() {
  
  }
  // creacion de un arreglo con la lista de mascotas
  lista_mascotas = new Array();

  grabar(){
    var existe = localStorage.getItem("datos");
    if (existe!=null) {
      this.lista_mascotas=JSON.parse(existe);
    }
    // objeto de tipo JSON
    var reg= {
      nombreMas: this.nombre,
      nombreDue: this.nombreDueno,
      edad: this.edad
    };
    // agregar un reg al arreglo
    this.lista_mascotas.push(reg);
    console.log(this.lista_mascotas);
    localStorage.setItem("datos", JSON.stringify(this.lista_mascotas));

  }
  
}
