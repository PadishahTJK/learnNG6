import { Component, OnInit, Input } from '@angular/core';
import {Icrib}  from "../icrib";
import {Http, Response} from '@angular/http';

@Component({
    selector: 'app-crib-cards',
    templateUrl: './crib-cards.component.html',
    styleUrls: ['./crib-cards.component.css']
  })

export class CribCardsComponent implements OnInit {

    @Input('crib') crib: Icrib;
    Item: any[];


    ngOnInit() {
       let bedroom = this.crib.bedrooms;
    }

}
