import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { ListaService } from '../lista.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DbServiceService } from '../db-service.service';
import { Observable } from 'rxjs';

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
              private location: Location,
              private dbService: DbServiceService) { }
  
  ngOnInit() {
    //this.alumno= new Persona('UUU','OOO','Alumno',6);
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.dbService.DamePersona(nombre)
    .subscribe(alumno => this.alumno=alumno);
  }

  
    Cambia(alumno:Persona){
      this.dbService.PonPass(alumno,this.nuevopass).subscribe();

      }
         
    

  // Cambia(){
  //   this.serviciolista.PonPass(this.alumno.nombre,this.nuevopass)
  // }
  // PonPass(nombre: string, nuevopass:string): void
  // {
  //   // filtramos y nos dara una lista de una posicion [0] y a esa posicion le cambiamos la contra a la que le pasamos 
  //   this.lista.filter(Persona => Persona.nombre === nombre)[0].contra = nuevopass; 
  // }

  Goback(){
    this.location.back();
  }

}
