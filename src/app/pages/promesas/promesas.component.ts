import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(() => {
      console.log("Listo!");
    })
      .catch(error => console.log(error))
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {

      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        if (contador == 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000)
    });
  }

}
