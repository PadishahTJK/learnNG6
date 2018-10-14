import { Injectable } from '@angular/core';
import  { Http, Response } from  "@angular/http";

@Injectable({
  providedIn: 'root'
})

export class TestJSONService {

  URI = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private  http: Http) {

  }

    getJSONobj(){
      return this.http.get(this.URI)
        .map(res => res.json())
        .do(data => {
           console.log(data);
        });
    }
}
