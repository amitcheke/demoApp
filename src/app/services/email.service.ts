import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailUrl = '/feedback/saveFeedback';
  private fileUploadUrl = '/feedback/upload'

  constructor(private http: HttpClient) {

  }

  sendEmail(message: object): Observable<object> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }

  sendEmailWithFile(file, message: object) {
   return this.http.post(this.fileUploadUrl, file)
    .map(res => res)
    .switchMap(data => {
        message['fileid'] = data['data'];
        return this.http.post(this.emailUrl, message);
    })
    .map(res => {
      return res;
    });
}
}