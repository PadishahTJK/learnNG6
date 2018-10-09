import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Icrib } from '../icrib';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {CribsService} from '../services/cribs.service';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})

export class CribListingComponent implements OnInit {

  // A local Member that has an array and we can call it cribs
 // cribs: Array<any> = cribs;
    cribs: Array<Icrib> = [];
    url = "data/cribs.json";
    error: string = '';

  constructor(private http: Http,
              private httpC: HttpClient,
              private cribService: CribsService ){ }

  ngOnInit() {
      this.cribService.getCribList()
        .subscribe(
          data => this.cribs = data,
          error => this.error = error.statusText
        );
  }

}
