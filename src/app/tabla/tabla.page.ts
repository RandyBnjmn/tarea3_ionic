import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  multiplicar() {
    console.log('KLK');
    let div = document.getElementById('tabla');
    div.innerText = '';
    let numero: number = parseFloat(
      (document.getElementById('num') as HTMLInputElement).value
    );

    for (let i = 1; i <= 13; i++) {
      div.innerText += `${numero} x ${i} = ${numero * i} \n`;
    }
  }
}
