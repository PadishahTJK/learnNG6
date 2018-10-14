import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Icrib } from '../icrib';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {CribsService} from '../services/cribs.service';
import {TestJSONService} from '../services/test-json.service';
import { Iuser } from '../iuser';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})

export class CribListingComponent implements OnInit {

  // A local Member that has an array and we can call it cribs
 // cribs: Array<any> = cribs;
    cribs: Array<Icrib> = [];
    url = 'data/cribs.json';
    error: string = '';
  sortFields: Array<string> = [
       'address',
        'area',
      'bathroom',
      'bedroom',
      'price',
      'type'
    ];

    form: Array<any> = [];
    users: Array<Iuser> = [];


  constructor(private http: Http,
              private httpC: HttpClient,
              private cribService: CribsService,
              private testJSONService: TestJSONService ) { }

  ngOnInit() {
      this.cribService.getCribList()
        .subscribe(
          data => this.cribs = data,
          error => this.error = error.statusText
        );

       this.testJSONService.getJSONobj()
         .subscribe(
           data => this.users = data
         );

       this.cribService.newCribSubject.subscribe(
         data => this.cribs = [data, ...this.cribs]);

  }

}
