import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// Recriei o objeto da pasta backend aqui, como um array de objetos.
export class HomeComponent implements OnInit {
  //corri o erro de tipo com o any dados.
  listaAlunos: any[] = [{
    "ru": 3294316,
    "name": "Naíme Andreotti David",
    "course": "Analise de Sistemas",
    "date": "16/04/1990"
  },
  {
    "ru": 90000,
    "name": "Mário Broz",
    "course": "Direito",
    "date": "16/05/1990"
  },
  {
    "ru": 90001,
    "name": "Jon Snow",
    "course": "Administração",
    "date": "21/01/1990"
  },
  {
    "ru": 90002,
    "name": "Luigi da Silva",
    "course": "Analise de Sistemas",
    "date": "12/07/1990"
  },
  {
    "ru": 90003,
    "name": "Aria Stark",
    "course": "Direito",
    "date": "16/08/1980"
  },
  {
    "ru": 234003,
    "name": "Mickey Mouse",
    "course": "Design",
    "date": "16/08/2000"
  }

  ];


  constructor() {

  }
  ngOnInit(): void {
  }

}
