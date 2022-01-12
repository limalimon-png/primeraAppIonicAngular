import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit() {
    // si ponemos debugger se para en ese punto la aplicacion desde el navegador
    
    let numero=10;
    numero =20;
    numero +=10;
    numero =0;
    alert(numero);
    console.log("hola mundo");
  }

}
