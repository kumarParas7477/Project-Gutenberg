import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  constructor(private http : HttpClient) { }


  getBooksData(pageNumber : number,topic : string) : Observable<any> {
    
return this.http.get<any>(`http://skunkworks.ignitesol.com:8000/books/?page=${pageNumber}&mime_type=image%2Fjpeg`);
  }
}
