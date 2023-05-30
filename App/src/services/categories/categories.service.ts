import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//categories Service to handle api requests
export class CategoriesService {
  private baseUrl = 'http://localhost:4000';

  //inject http service
  constructor(private http:HttpClient) { }


  //method to get filtered products
  getFilteredProducts(categories:string[]):Observable<any>{

    //api endpoint for fetching products
    const url = `${this.baseUrl}/products`

    //sends a post request to backend server with selected categories
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNzM1NGI0Yy0yMjg1LTRjZGItODA5ZS0zODFiNjI4NTU0ZWUiLCJlbWFpbCI6ImpvbmF0aGFubmRhbWJ1a2lAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9uYXRoYW4iLCJsYXN0TmFtZSI6Ik5kYW1idWtpIiwiaXNEZWxldGVkIjowLCJpc0FkbWluIjowLCJlbWFpbHNSZWNlaXZlZCI6MCwiaWF0IjoxNjg1NDQ4MTI2LCJleHAiOjE2ODU4MDgxMjZ9.YeDGpXoURqcsECQga_1LC-ebF0xW2IkdLk7S2443AEA'

     const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'token':`${token}`
    });
    return this.http.post(url,{header,categories});
  }
}
