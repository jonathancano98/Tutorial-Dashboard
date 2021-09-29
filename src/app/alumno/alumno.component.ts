import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { ListaService } from '../lista.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  // Variables
  alumno: Persona;
  nuevopass: string;
  
  constructor(private serviciolista: ListaService,
              private route: ActivatedRoute,
              private location: Location) { }
  
  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.alumno = this.serviciolista.DamePersona(nombre);
  }

  

  Cambia(){
    this.serviciolista.PonPass(this.alumno.nombre,this.nuevopass)
  }

  Goback(){
    this.location.back();
  }

}
