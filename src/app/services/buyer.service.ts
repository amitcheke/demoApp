import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

	private newFirstStepData = new BehaviorSubject<any>({}); 	
	cast = this.newFirstStepData.asObservable();
  constructor(private http:HttpClient) { }


  setFirstStepData(data: object){
  	this.newFirstStepData.next(data);
  }

}
