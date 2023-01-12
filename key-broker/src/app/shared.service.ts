import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000"
  
  constructor(private http: HttpClient) { }
  getUserList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/user');
  }
  postUser(val: any) {
    console.log(val)
    return this.http.post(this.APIUrl + '/user', val);
  }

  postProperty(val: any) {
    console.log(val)
    return this.http.post(this.APIUrl + '/upload_property', val);
  }
  getPropertyList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/upload_property');
  }

  getImage(): Observable<any[]> {
    return this.http.get<any[]>("http://rukminim1.flixcart.com/image/312/312/kfbfr0w0/mobile/s/t/p/realme-narzo-20-rmx2193-original-imafvsw7vfqzh6wr.jpeg?q=70");
  }

  postbuyer(val: any) {
    console.log(val)
    return this.http.post(this.APIUrl + '/buyer_form', val);
  }

  getBuyer(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/buyer_form');
  }

  deleteProperty(val: any) {
    console.log(val)
    return this.http.post(this.APIUrl + '/deleteproperty', val);
  }

  deleteBuyer(val: any) {
    console.log(val)
    return this.http.post(this.APIUrl + '/deletebuyer', val);
  }

 
}