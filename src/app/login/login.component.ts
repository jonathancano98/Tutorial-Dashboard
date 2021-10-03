import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { Persona } from '../Persona';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables (se rellenan de los ngModels de login.html)
  nombre: string;
  pass: string;
  
  // Creamos elemento serviciolista de la clase Listaservice
  constructor(private serviciolista: ListaService,
              private dbService: DbServiceService) { }

  ngOnInit() {
  }

  

  Autentificar(){
    this.dbService.DamePersona(this.nombre)
    .subscribe(Persona =>{
                            
                            if(Persona.nombre === this.nombre && Persona.contra === this.pass){
                               if(Persona.rol === "Profesor"){window.location.href= '/profesor';}
                               else{window.location.href = '/alumno/' + Persona.nombre;}
                              }
                            else
                              {
                                 console.log('Contraseña incorrecta');
                              }
                           }
                );
                  }
}
// Autentificar()
  // {
  //   // El let se usa para declarar variables dentro de funciones
  //   let persona: Persona;
  //   persona =this.serviciolista.Autentificar(this.nombre,this.pass);
    
  //   if(persona != null)
  //   {
  //    if(persona.rol === "Profesor"){window.location.href= '/profesor'}
  //    else{window.location.href = '/alumno/' + persona.nombre;}
  //   }
  //   else
  //   {
  //     console.log('Contraseña incorrecta');
  //   }
  // }