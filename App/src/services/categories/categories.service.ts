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

      // Get the login token from your backend
      const loginToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNzM1NGI0Yy0yMjg1LTRjZGItODA5ZS0zODFiNjI4NTU0ZWUiLCJlbWFpbCI6ImpvbmF0aGFubmRhbWJ1a2lAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9uYXRoYW4iLCJsYXN0TmFtZSI6Ik5kYW1idWtpIiwiaXNEZWxldGVkIjowLCJpc0FkbWluIjowLCJlbWFpbHNSZWNlaXZlZCI6MCwiaWF0IjoxNjg1NDUxODYwLCJleHAiOjE2ODU4MTE4NjB9.OPAjgqbQcAGsVLNVkknEFgMir-R4-bIH63n2uScdUYc';

    // Create the headers with the login token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${loginToken}`
    });

    // Sends a post request to the backend server with selected categories and headers
    return this.http.post(url, { categories }, { headers });
  }
}
