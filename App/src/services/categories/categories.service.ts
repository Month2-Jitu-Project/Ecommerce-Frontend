import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//categories Service to handle api requests
export class CategoriesService {
  // private baseUrl = 'http://localhost:4000';

  // //inject http service
  // constructor(private http:HttpClient) { }


  // //method to get filtered products
  // getFilteredProducts(categories:string[]):Observable<any>{

  //   //api endpoint for fetching products
  //   const url = `${this.baseUrl}/products`

  //     // Get the login token from the backend
  //     const loginToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNzM1NGI0Yy0yMjg1LTRjZGItODA5ZS0zODFiNjI4NTU0ZWUiLCJlbWFpbCI6ImpvbmF0aGFubmRhbWJ1a2lAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9uYXRoYW4iLCJsYXN0TmFtZSI6Ik5kYW1idWtpIiwiaXNEZWxldGVkIjowLCJpc0FkbWluIjowLCJlbWFpbHNSZWNlaXZlZCI6MCwiaWF0IjoxNjg1NTMxMTYzLCJleHAiOjE2ODU4OTExNjN9.gefmuQ58fAbYiOaDCz-9ZKK6g6Cvasyzc2H7AESEd6k";

  //   // Create the headers with the login token
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${loginToken}`
  //   });

  //   // Sends a post request to the backend server with selected categories and headers
  //   return this.http.get(url,{headers});
  // }
  constructor(private http: HttpClient) {}


  getFilteredProducts(selectedCategories: string[]): Observable<any> {
    
    // Make a GET request to the API with selected categories
    const url = 'http://localhost:4000/products';
    return this.http.get(url).pipe(
      map((response: any) => {
        // Filter the products based on selected categories
        const filteredProducts = response.filter((product: any) =>
          selectedCategories.includes(product.category)
        );

        // Return the filtered products
        return { products: filteredProducts };
      }),
      catchError((error: any) => {
        // Handle error
        throw error;
      })
    );
  }

  

  
}
