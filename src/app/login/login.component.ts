import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { Persona } from '../Persona';

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
  constructor(private serviciolista: ListaService) { }

  ngOnInit() {
  }

  Autentificar()
  {
    // El let se usa para declarar variables dentro de funciones
    let persona: Persona;
    persona =this.serviciolista.Autentificar(this.nombre,this.pass);
    
    if(persona != null)
    {
     if(persona.rol === "Profesor"){window.location.href= '/profesor'}
     else{window.location.href = '/alumno/' + persona.nombre;}
    }
    else
    {
      console.log('Contraseña incorrecta');
    }
  }
}
