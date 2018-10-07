import { Component, OnInit } from '@angular/core';
import {cribs } from "./../data/cribs";

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  // A local Member that has an array and we can call it cribs
 // cribs: Array<any> = cribs;
    cribs: any[] = cribs;

  constructor() { }

  ngOnInit() {
  }

}
