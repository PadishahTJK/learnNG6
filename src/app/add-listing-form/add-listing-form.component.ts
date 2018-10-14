import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {CribsService} from '../services/cribs.service';



@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;

  // propertyTypes: Array<string> = ['House', 'Condo', 'Duplex' ];

  constructor(public cribsService: CribsService) { }

  ngOnInit() {
  }
  // So this is going to take care of routing  the data that comes htmlfrom  into
  // a method
  onCribSubmit(data): void {
    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }



}
