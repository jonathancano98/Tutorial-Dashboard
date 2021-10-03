import { Injectable } from '@angular/core';
import { Persona } from './Persona';

import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  //Variable
  private APIurl = "http://[::1]:3000/personas";
  
  constructor(
    private http: HttpClient) { }

  //   Mostrar(): Persona[] {
  //     return this.lista;
  //   }
 
  //   Incrementar(nombreincr: string): Persona[] {
  //    this.lista.filter(Persona => Persona.nombre === nombreincr)[0].puntuacion++;
  //    return this.lista;
  //  }

  
 
  //  Eliminar(nombrelim: string): Persona[]
  //  {
  //    this.lista = this.lista.filter(Persona => Persona.nombre !== nombrelim);
  //    return this.lista;
  //  }
 
  //  OrdenarPuntos (): Persona[] 
  //  {
  //    this.lista = this.lista.sort(function(obj1,obj2){return obj2.puntuacion - obj1.puntuacion;});
  //    return this.lista;
  //  }

  OrdenarPuntos(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.APIurl);
  }
 
  //  OrdenarAlfabeticamente2 (): Persona[] 
  //  {
  //    this.lista.sort((a, b) => {
  //      if(a.nombre.toLowerCase()> b.nombre.toLowerCase()) {
  //        return 1;
  //      } else if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
  //        return -1;
  //      } else {
  //        return 0;
  //      }
  //    });
  //    console.log(this.lista);
  //    return this.lista;
  //  }
 
  //  Ponpersona(Persona: Persona): Persona[]
  //  {
  //    this.lista.push(Persona);
  //    return this.lista;
  //  }
 
  //  Autentificar(nombre: string, pass: string): Persona
  //  {
  //    let user: Persona[] = [];
  //    user = this.lista.filter(Persona => Persona.nombre === nombre && Persona.contra === pass);
 
  //    if (user.length === 0){ return null;}
  //    else { return user[0];}
 
  //  }

  
 
  //  PonPass(nombre: string, nuevopass:string): void
  //  {
  //    // filtramos y nos dara una lista de una posicion [0] y a esa posicion le cambiamos la contra a la que le pasamos 
  //    this.lista.filter(Persona => Persona.nombre === nombre)[0].contra = nuevopass; 
  //  }
 
  //  DamePersona(nombre: string): Persona 
  //  {
  //    return this.lista.filter(Persona => Persona.nombre === nombre)[0];
  //  }
 
  //  Ver(nombre: string): Persona
  //  {
  //    let user: Persona
  //    user= this.lista.filter(Persona => Persona.nombre === nombre)[0];
  //    return user;
  //  }
 
  PonPass(persona:Persona , NuevaContra:string): Observable<any>{
    persona.contra=NuevaContra;
    return this.http.put<any>(this.APIurl +'/'+persona.nombre,persona);
  }
    

  Mostrar (): Observable <Persona[]>{
      return this.http.get<Persona[]>(this.APIurl);
  }

  DamePersona(nombre: string): Observable<Persona>{
    return this.http.get<Persona>(this.APIurl + '/' + nombre);
  }

  getPersonas (): Observable <Persona>{
    return this.http.get<Persona>(this.APIurl);
  }

  PonPersona(persona: Persona): Observable<any> {
    return this.http.post<any>(this.APIurl,persona)
  } 
  
  Incrementar(persona:Persona): Observable<any>{
    persona.puntuacion++;
    return this.http.put<any>(this.APIurl +'/'+persona.nombre,persona);
}

  Eliminar(nombre: string) : Observable<any>{
    return this.http.delete<any>(this.APIurl+'/'+ nombre);
  }

}
