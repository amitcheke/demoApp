import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import { BuyerService } from './../services/buyer.service';

@Component({
  selector: 'app-buyer-first-step',
  templateUrl: './buyer-first-step.component.html',
  styleUrls: ['./buyer-first-step.component.css'],
  providers: [BuyerService],
})
export class BuyerFirstStepComponent implements OnInit {

  constructor(public buyerService: BuyerService,private router: Router) { }

  ngOnInit() {
  }

  submit(){

  let data = {
  'test':'test',
  'test2':'test2',
  }
  this.buyerService.setFirstStepData(data);

  	this.router.navigate(['buyer-second-step']);
  }
}
