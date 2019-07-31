import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})

export class AccountSettingsComponent implements OnInit {

  constructor(public _settings: SettingsService) { }

  ngOnInit() {
    this.defaultCheck()
  }

  cambiarColor(tema: string, link: any) {

    this.aplicarCheck(link);
    this._settings.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  defaultCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      if (this._settings.ajustes.tema == ref.getAttribute('data-theme')) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
