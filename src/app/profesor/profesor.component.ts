import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { Persona } from '../Persona';

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
  pass: string;
  puntos: number;
  rol: string;

  constructor(private serviciolista: ListaService) { }

  ngOnInit() {}

  ///////////////// Funciones

  Mostrar(){
    this.lista = this.serviciolista.Mostrar();
  }

  Incrementar(nombre: string){
    this.lista = this.serviciolista.Incrementar(nombre);
  }


  Ordenarporpuntos(){
    this.lista=this.serviciolista.OrdenarPuntos();
  }

  Añadirpersona(){
    this.lista=this.serviciolista.Ponpersona(new Persona(this.nombre,this.pass,this.rol,this.puntos));
  }

  Eliminar(nombreeliminar: string){
    this.lista=this.serviciolista.Eliminar(nombreeliminar);
  }

  ///////////////// Funciones

}
