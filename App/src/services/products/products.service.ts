import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ProductModel } from 'src/abstract_classes/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsUrl = 'http://localhost:4000/products';
    private products: ProductModel[] = [];
    private productsSubject: Subject<ProductModel[]> = new Subject<ProductModel[]>();

    constructor(private http: HttpClient) { }

    getProducts(): Observable<any[]> {
        return this.http.get<any[]>(this.productsUrl);
    }

    fetchProducts(): void {
        this.getProducts().subscribe(
            (products: ProductModel[]) => {
                this.products = products;
                this.productsSubject.next(this.products); 
                // EMIT UPDATED products
            },
            (error: any) => {
                console.error('Error fetching products:', error);
            }
        );
    }

    getStoredProducts(): Observable<ProductModel[]> {
        return this.productsSubject.asObservable();
    }
}
