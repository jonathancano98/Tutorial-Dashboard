import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { ListaService } from '../lista.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  // Variables
   
  alumno: Persona;

  constructor(private serviciolista: ListaService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // Guarda en la variable nombre , lo que hay en el parametro de la URL (routing) : ver/nombre
   //  y con ese parametro que es un nombre y la funcion damepersona sacamos al alumno 
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.alumno = this.serviciolista.DamePersona(nombre);
  }

  Goback(){
    this.location.back();
  }

}
