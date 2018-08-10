import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

	public newFirstStepData = new Subject<any>(); 	

  constructor(private http:HttpClient) { }


  setFirstStepData(data){
  	this.newFirstStepData.next(data);
  }

}
