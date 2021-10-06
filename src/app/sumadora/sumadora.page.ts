import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  sumar(): void {
    let div = document.getElementById('resultado');
    div.innerHTML = ``;
    let num1: number = parseFloat(
      (document.getElementById('num1') as HTMLInputElement).value
    );

    let num2: number = parseFloat(
      (document.getElementById('num2') as HTMLInputElement).value
    );

    div.innerHTML = `<p>El resultado de la suma es:  ${num1 + num2}</p>`;
  }
}
