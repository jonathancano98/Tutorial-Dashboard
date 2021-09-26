import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent implements OnInit {

  persona: Persona;
  constructor() { }

  ngOnInit() {
  }

  Mostrar(){
    console.log('Entro a mostrar');
    this.persona = new Persona ('Juan','JJJ','Alumno',10);
  }
}
