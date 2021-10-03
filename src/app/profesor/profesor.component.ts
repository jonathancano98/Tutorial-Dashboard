import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { Persona } from '../Persona';
import { Location } from '@angular/common';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})

export class ProfesorComponent implements OnInit {

  // Lista de personas
  lista: Persona[] = [];
  
  // Variables (se rellenan de los ngModels de profesor.html)
  nombre: string;
  contra: string;
  puntuacion: number;
  rol: string;

  constructor(private serviciolista: ListaService,
              private location: Location,
              private dbService: DbServiceService) { }

  ngOnInit() {}

  ///////////////// Funciones

  // Mostrar(){
  //   this.lista = this.serviciolista.Mostrar();
  // }


  // Incrementar(nombre: string){
  //   this.lista = this.serviciolista.Incrementar(nombre);
  // }


  // Ordenarporpuntos(){
  //   this.lista=this.serviciolista.OrdenarPuntos();
  // }

  // Anadirpersona(){
  //   this.lista=this.serviciolista.Ponpersona(new Persona(this.nombre,this.contra,this.rol,this.puntuacion));
  // }

  // Eliminar(nombreeliminar: string){
  //   this.lista=this.serviciolista.Eliminar(nombreeliminar);
  // }

  // Ver(nombreaver: string)
  // {
  //   let persona: Persona
  //   persona = this.serviciolista.Ver(nombreaver);
  //   window.location.href = '/ver/' + persona.nombre;
  //   console.log(persona.nombre,persona.contra,persona.puntuacion);
  // }

  Ver(nombre: string)
  {
    this.dbService.DamePersona(nombre)
    .subscribe(persona =>{ 
                          //Cambia de pagina
                          window.location.href = '/ver/' + persona.nombre;
                          console.log(persona.nombre,persona.contra,persona.puntuacion);
                        });
    
  }


  Goback(){
    this.location.back();
  }

  ///////////////// Funciones

  Mostrar(){

    this.dbService.Mostrar()
    .subscribe(lista =>{ 
      this.lista = lista;
      console.log('Lista:',this.lista)
     });
    
     console.log('Ya me he suscrito');

}

  Anadirpersona() {
    this.dbService.PonPersona(
      new Persona(this.nombre,this.contra,this.rol,this.puntuacion))
      // Los () es xq me da igual el valor del observable solo me interesa la lista
      .subscribe(() => this.Mostrar());
  }

  Incrementar(persona: Persona){
    this.dbService.Incrementar(persona)
    .subscribe(() => this.Mostrar());
  }

  Eliminar(nombreelim:string){
    this.dbService.Eliminar(nombreelim)
    .subscribe(()=>this.Mostrar());
  }
  // OrdenarPuntos (): Persona[] 
  // {
  //   this.lista = this.lista.sort(function(obj1,obj2){return obj2.puntuacion - obj1.puntuacion;});
  //   return this.lista;
  // }


  Ordenarporpuntos(){
     this.dbService.OrdenarPuntos() //Aqui recibimos la lista de personas
     .subscribe(lista =>{ 
                        this.lista = lista.sort(function(obj1,obj2){return obj2.puntuacion - obj1.puntuacion;})
                        console.log('Lista:',this.lista)
                        });
  }
}
