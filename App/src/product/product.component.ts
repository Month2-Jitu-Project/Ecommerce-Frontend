// THIS IS THE ROOT COMPONENT OF THE APP
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// ICONS
import { faTrashCan, faPlus, faCartShopping, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from 'src/abstract_classes/product.model';
import { ProductService } from 'src/services/products/products.service';
// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'product', // CUSTOM HTML SELECTOR 
  templateUrl: './product.component.html', // LINK TO HTML 
  styleUrls: ['./product.component.css'],  // LINK TO CSS  
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class ProductComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) { }


  // FONT AWESOME ICONS
  plusIcon = faPlus;
  deleteIcon = faTrashCan;
  cartIcon = faCartShopping;
  heartIcon = faHeart;
  ellipsisIcon = faEllipsis;


  ngOnInit() {
    this.productService.fetchProducts();
    this.productService.getStoredProducts().subscribe((products: ProductModel[]) => {
      this.products = products;
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
    alert('Product deleted!');
  }

}
