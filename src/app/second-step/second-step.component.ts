import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuyerService } from './../services/buyer.service';
import { EmailService} from './../services/email.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {
	firstStep: Array<any>;
	error: string;
	personalData:any = {}
  showMaking:boolean = false;
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
  this.showMaking = true;  
  var message = {...personalData, ...this.businessDetails};
  console.log(message)

  if(message.fileToBeUpload){
    let input = new FormData();
    message = null;
    for (let key in message) {
      let value = message[key];
      input.append(key, message[key]);
    }
    message = input;
  }
  console.log(message)
   this.emailService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
      this.showMaking = false;
    }, error => {
      console.log('AppComponent Error', error);
      this.showMaking = false;
    })
  }

  backToPreviousStep(){
  	this.router.navigate(['first-step']);
  }

}
