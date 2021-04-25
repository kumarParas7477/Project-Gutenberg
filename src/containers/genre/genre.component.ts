import { Component, Input, OnInit } from '@angular/core';
import { CardContainerComponent } from 'src/components/card-container/card-container.component';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
@Input() selectedTopic : string;
  constructor() { }

  ngOnInit(): void {
  }

}
