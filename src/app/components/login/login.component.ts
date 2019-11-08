import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Clase(){
    let btn = document.getElementById("boton");
    let atrivo =document.createAttribute("class");

    atrivo.value = "btn btn-primary animated pulse";

    btn.setAttributeNode(atrivo);
  }

  ClaseOut(){
    let btn = document.getElementById("boton");
    let atrivo =document.createAttribute("class");

    atrivo.value = "btn btn-primary";

    btn.setAttributeNode(atrivo);
  }
}
