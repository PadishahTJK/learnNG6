import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public  capitalize( word ): string {
    return word.charAr(0).toUpperCase().s;
  }


}
