import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  setValor(number) {


    if (number > 100) {
      this.porcentaje = 100;
    } else if (number < 0 || number === null) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = number;
    }
    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.value = this.porcentaje;
  }

  cambiarValor(valor) {

    if (this.porcentaje + valor >= 0 && this.porcentaje + valor <= 100) {
      this.porcentaje += valor;
      this.cambioValor.emit(this.porcentaje);
    }
  }
}
