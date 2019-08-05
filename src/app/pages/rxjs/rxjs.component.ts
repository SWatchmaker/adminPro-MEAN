import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable()
      .subscribe(
        numero => console.log(numero),
        error => console.error(error),
        () => console.log('Fin!')
      )

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable<any>(observer => {

      let contador = 0;

      const intervalo = setInterval(() => {
        contador++;

        const salida = {
          valor: contador
        }
        observer.next(salida);

        if (contador === 11) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000)
    }).pipe(
      map(resp => {
        return resp.valor;
      }),
      filter((valor, index) => {
        if (valor % 2 === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
