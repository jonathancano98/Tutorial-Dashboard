export class Persona  {
  nombre: string;
  contra: string;
  rol: string;
  puntuacion: number;


  constructor(NuevoNombre: string, NuevaContra: string, Nuevorol: string, NuevaPunt: number)
  {
    this.nombre= NuevoNombre;
    this.contra= NuevaContra;
    this.rol= Nuevorol;
    this.puntuacion= NuevaPunt;
  
  }
 
}