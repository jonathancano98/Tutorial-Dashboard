import { Injectable } from '@angular/core';
import { Persona } from 'src/app/Persona';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  //Variable lista que declara una lista de Personas

  lista: Persona[] = [];
  
  // El constructor te crea una Lista con personas ya dentro
  constructor()
   {
    this.lista[0] = new Persona('Jonathan', 'JJJ', 'Profesor',6);
    this.lista[1] = new Persona('Pedro', 'PPP', 'Alumno',8);
    this.lista[2] = new Persona('Antonio', 'AAA', 'Profesor',2);
    this.lista[3] = new Persona('Laura', 'LLL', 'Alumno',9);
    this.lista[4] = new Persona('Sofia', 'SSS', 'Profesor',1);
    
   }

   Mostrar(): Persona[] {
     return this.lista;
   }

   Incrementar(nombreincr: string): Persona[] {
    this.lista.filter(Persona => Persona.nombre === nombreincr)[0].puntuacion++;
    return this.lista;
  }

  Eliminar(nombrelim: string): Persona[]
  {
    this.lista = this.lista.filter(Persona => Persona.nombre !== nombrelim);
    return this.lista;
  }

  OrdenarPuntos (): Persona[] 
  {
    this.lista = this.lista.sort(function(obj1,obj2){return obj2.puntuacion - obj1.puntuacion;});
    return this.lista;
  }

  OrdenarAlfabeticamente2 (): Persona[] 
  {
    this.lista.sort((a, b) => {
      if(a.nombre.toLowerCase()> b.nombre.toLowerCase()) {
        return 1;
      } else if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log(this.lista);
    return this.lista;
  }

  Ponpersona(Persona: Persona): Persona[]
  {
    this.lista.push(Persona);
    return this.lista;
  }

  Autentificar(nombre: string, pass: string): Persona
  {
    let user: Persona[] = [];
    user = this.lista.filter(Persona => Persona.nombre === nombre && Persona.contra === pass);

    if (user.length === 0){ return null;}
    else { return user[0];}

  }

  PonPass(nombre: string, nuevopass:string): void
  {
    // filtramos y nos dara una lista de una posicion [0] y a esa posicion le cambiamos la contra a la que le pasamos 
    this.lista.filter(Persona => Persona.nombre === nombre)[0].contra = nuevopass; 
  }

  DamePersona(nombre: string): Persona 
  {
    return this.lista.filter(Persona => Persona.nombre === nombre)[0];

    // ///////////////////////////////////// Otra Forma de hacerlo 1
    // let user: Persona
    // user= this.lista.filter(Persona => Persona.nombre === nombre)[0];
    // return user;

    // ///////////////////////////////////// Otra Forma de hacerlo 2

    // let user: Persona[] = [];
    // user= this.lista.filter(Persona => Persona.nombre === nombre);
    // return user [0];
    // ///////////////////////////////////// Otra Forma de hacerlo

  }

  Ver(nombre: string): Persona
  {
    let user: Persona
    user= this.lista.filter(Persona => Persona.nombre === nombre)[0];
    return user;
  }
}
