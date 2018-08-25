import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuyerService } from './../services/buyer.service';
import { EmailService} from './../services/email.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-buyer-second-step',
  templateUrl: './buyer-second-step.component.html',
  styleUrls: ['./buyer-second-step.component.css']
})
export class BuyerSecondStepComponent implements OnInit {
	firstStep: Array<any>;
	error: string;
	personalData = {}

	businessDetails:object;

  constructor(
  	private http: HttpClient,
  	private buyerService: BuyerService,
  	private emailService: EmailService,
  	private router: Router
  ) { }

  ngOnInit() {
  	
 this.buyerService.castBusinessDetails.subscribe(
  		data => this.businessDetails = data
  	);
  }

  sendEmail(personalData) {
  var message = {...personalData, ...this.businessDetails};
  console.log(message)
   /*this.emailService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })*/
  }

  backToPreviousStep(){
  	this.router.navigate(['buyer-first-step']);
  }

}
