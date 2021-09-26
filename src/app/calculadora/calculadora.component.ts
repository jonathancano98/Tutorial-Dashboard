import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  numero: number;
  resultado: number;
  
  Duplicar()
  {
    console.log('Voy a duplicar');
    this.resultado = this.numero * 2;
    console.log(this.resultado);
 
  }
  constructor() { console.log('Estoy en constructor'); }

  ngOnInit() {
    console.log('Inicio el componente');
  }

}
