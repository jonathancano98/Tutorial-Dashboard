import { Injectable } from '@angular/core';
import { Persona } from 'src/app/Persona';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  lista: Persona[] = [];
  
  // El constructor te crea una Lista con personas ya dentro
  constructor()
   {
    this.lista[0] = new Persona('Juan', 'JJJ', 'Profesor',6);
    this.lista[1] = new Persona('Pedro', 'PPP', 'Alumno',8);
    this.lista[2] = new Persona('Antonio', 'AAA', 'Profesor',2);
    this.lista[3] = new Persona('Laura', 'LLL', 'Alumno',9);
    this.lista[4] = new Persona('Sofia', 'SSS', 'Profesor',1);
    this.lista[5] = new Persona('Ivan', 'III', 'Alumno',3);
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

}
