import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksDataService } from 'src/services/books-data.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
   topic : string ;
pageNumber : number = 0;
booksArray : Array<string> =[];
filterBooksArray :Array<string> =[];
search : string = '';
scrollable : number =  document.documentElement.scrollHeight - window.innerHeight;
scrollPosition : number = 1;
  constructor(private bookService : BooksDataService ,private route : ActivatedRoute) {
  
   }

  ngOnInit(): void {
    this.topic = this.route.snapshot.paramMap.get('topic');
    this.getBooks();
    window.addEventListener('scroll',this.getMoreBooks.bind(this),true);

  }

  getBooks(){
this.bookService.getBooksData(++this.pageNumber,this.topic).subscribe((response : any)=>{

  let responseBooks = this.filterArrayBasesOnTopic(response.results);
     this.booksArray= [...this.booksArray,...responseBooks];
     this.filterBooksArray= [...this.booksArray];
    
     })
  }
  getBookTitle(title : string){
    let a = title.split(/[;,:,,,\,]/);
    return a[0];
  }

  getAuthorName(authors : Array<any>){
    let a  : string= authors.reduce((a,b)=>a+','+b.name,'');
    return a.slice(1)

  }
  set searched(text :string){
    this.search = text;
    this.filterBooksArray = this.filterArray(this.search);
  }
  get searched(){
    return this.search;
  }
  filterArrayBasesOnTopic(books : Array<any>){
    return books.filter((book: any) => book.bookshelves.join('').toLowerCase().includes(this.topic.toLowerCase()) || book.subjects.join('').toLowerCase().includes(this.topic.toLowerCase()));
  }
  filterArray(text : string){
    
return this.booksArray.filter((book : any) => book.title.toLowerCase().includes(text.toLowerCase()) || this.authorMatched(book.authors,text));
  }
authorMatched(authors : Array<any>,text : string){
for(let i=0;i<authors.length;i++){
  let author : string = authors[i].name;
  if(author.toLowerCase().includes(text)){
    return true;
  }
}
return false;
}

openBook(book : any){
  let formats : Object = book.formats;
  let format : Array<string> = Object.keys(formats);
  console.log(format);
for(let i = 0;i<format.length;i++){
  console.log(formats[format[i].split(';')[0]]);
  if(format[i].split(';')[0].includes('html')){
    window.location.href = formats[format[i]].toString();
    break;
  }
  else if(format[i].split(';')[0].includes('plain')){
    window.location.href = formats[format[i]].toString();
    break;
  }
}


}

getMoreBooks(){
  this.scrollable = document.documentElement.scrollHeight - window.innerHeight;
if(window.scrollY  >= this.scrollable - 1  ){
let timeout = setTimeout(()=> {
clearTimeout(timeout);
this.getBooks();
},2000);
   }
  


}



}
