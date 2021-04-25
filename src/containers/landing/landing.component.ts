import { Component, OnInit } from '@angular/core';
import { BooksDataService } from 'src/services/books-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(private booksService : BooksDataService) { }

  ngOnInit(): void {
  
  }

 
}
