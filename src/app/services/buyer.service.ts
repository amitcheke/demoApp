import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

	private businessDetails = new BehaviorSubject<any>({});

	private userType = new BehaviorSubject<string>("");  	
	
	castBusinessDetails = this.businessDetails.asObservable();
	
  	constructor() { }


  setFirstStepData(data: object){
  	this.businessDetails.next(data);
  }

}
