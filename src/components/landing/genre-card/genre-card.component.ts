import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IBookType {
  display: string,
  value: string
}
@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent implements OnInit {
  bookTypes: Array<IBookType> = [{
    display: 'FICTION', value: 'fiction'
  },
  {
    display: 'DRAMA', value: 'drama'
  },
  {
    display: 'HUMOR', value: 'humor'
  },
  {
    display: 'POLITICS', value: 'politics'
  },
  {
    display: 'PHILOSOPHY', value: 'philosophy'
  },
  {
    display: 'HISTORY', value: 'history'
  },
  {
    display: 'ADVENTURE', value: 'adventure'
  }]
  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  
}
