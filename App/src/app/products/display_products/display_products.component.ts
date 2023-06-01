// THIS IS THE ROOT COMPONENT OF THE APP
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// ICONS
import { faTrashCan, faPlus, faCartShopping, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { PRODUCT_MODEL } from '../../../abstract_classes/product.model';
import { ProductService } from '../../../services/products/products.service';
import { CategoriesComponent } from 'src/app/categories/categories.component';
import { ProductFilterService } from 'src/services/filterProducts/productFilter.service';
// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'product', // CUSTOM HTML SELECTOR 
  templateUrl: 'display_products.component.html', // LINK TO HTML 
  styleUrls: ['display_products.component.css'],  // LINK TO CSS  
  standalone: true,
  imports: [CommonModule, FontAwesomeModule,CategoriesComponent]
})
export class DisplayProductsComponent implements OnInit {

  products: any[] = [];
  filteredProducts: PRODUCT_MODEL[] = [];

  constructor(private productService: ProductService,private productFilterService: ProductFilterService) { }

  // FONT AWESOME ICONS
  plusIcon = faPlus;
  deleteIcon = faTrashCan;
  cartIcon = faCartShopping;
  heartIcon = faHeart;
  ellipsisIcon = faEllipsis;

  ngOnInit() {
    this.productService.fetchProducts();
    this.productService.getStoredProducts().subscribe((products: PRODUCT_MODEL[]) => {
      this.products = products;
      this.filteredProducts = products;
    });

    this.productFilterService.filteredProducts$.subscribe(filteredProducts => {
      this.filteredProducts = filteredProducts;
    });
  }

  ///////////////////////////////////////
  //// METHOD TO ADD PRODUCT TO CART ////
  ///////////////////////////////////////
  addProductToCart() {
    alert('Product added to cart!');
  }

  /////////////////////////////////////
  //// METHOD TO DELETE A PRODUCT /////
  /////////////////////////////////////
  deleteProduct() {
    alert('Product deleted!');
  }

  ////////////////////////////////////////////
  //// METHOD TO ADD PRODUCT TO FAVORITES ////
  ////////////////////////////////////////////
  addToFavorites() {
    alert('Product added to favorites!');
  }
}
