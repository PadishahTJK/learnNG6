import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from  'rxjs/operators';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  listUrl = 'data/cribs.json';

  public newCribSubject = new Subject<any>();

  constructor(private http:  Http) { }

   getCribList() {
     return this.http.get(this.listUrl)
       .map(res => res.json())
       .do(data => {
         console.log(data);
       }
       );
   }
    // Communication Bus  btw different components
      addCrib(data) {
        data.image = 'default-crib' ;
        this.newCribSubject.next(data);
   }

}
