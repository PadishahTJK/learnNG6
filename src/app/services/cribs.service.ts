import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  listUrl = 'data/cribs.json';

  constructor(private http:  Http) { }

   getCribList() {
     return this.http.get(this.listUrl)
       .map(res => res.json())
       .do(data => {
         console.log(data)
       }
       );

   }

}
