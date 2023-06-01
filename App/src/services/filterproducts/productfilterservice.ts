import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PRODUCT_MODEL } from 'src/abstract_classes/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  private filteredProductsSubject = new BehaviorSubject<PRODUCT_MODEL[]>([]);
  filteredProducts$ = this.filteredProductsSubject.asObservable();

  updateFilteredProducts(filteredProducts: PRODUCT_MODEL[]) {
    this.filteredProductsSubject.next(filteredProducts);
  }

  constructor() { }
}
