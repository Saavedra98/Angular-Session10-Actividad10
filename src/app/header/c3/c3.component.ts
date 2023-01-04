import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {



  tareas = [
    ['Tarea1', 'Descripcion1'], 
  ];

  enviar(tareaInput:String, descripcionInput: String){
    this.tareas.push([String(tareaInput), String(descripcionInput)]);
  } 



}
