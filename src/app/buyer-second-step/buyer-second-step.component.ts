import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuyerService } from './../services/buyer.service';
import { EmailService, IMessage } from './../services/email.service';

@Component({
  selector: 'app-buyer-second-step',
  templateUrl: './buyer-second-step.component.html',
  styleUrls: ['./buyer-second-step.component.css']
})
export class BuyerSecondStepComponent implements OnInit {
	firstStep: Array<any>;
	error: string;
	message: IMessage = {};
  constructor(
  	private http: HttpClient,
  	private buyerService: BuyerService,
  	private emailService: EmailService
  ) { }

  ngOnInit() {
  	

  	this.buyerService.newFirstStepData.subscribe(
  		data => console.log("----------------->>"+data)
  	)
  }

  sendEmail(message: IMessage) {
    this.emailService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }

}
