import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { NumerosALetras } from 'numero-a-letras';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  traducir(): void {
    let div = document.getElementById('resultado');
    div.innerHTML = ``;
    let num: number = parseFloat(
      (document.getElementById('num') as HTMLInputElement).value
    );
    if (num > 1000) {
      alert('Ingrese un numero entre 1 y 1000');
    } else if (num == 1000) {
      div.innerHTML = `<h3>Mil</h3>`;
    } else {
      let resultado: string = NumerosALetras(num);
      div.innerHTML = `<h3>${resultado}</h3>`;
    }
  }
}
