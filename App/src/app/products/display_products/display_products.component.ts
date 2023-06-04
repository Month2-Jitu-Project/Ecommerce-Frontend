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
import { UserService } from 'src/services/users/users.service';
import { CartService } from 'src/services/cart/cart.service';
import { MessageBoxService } from 'src/services/message-box/message-box.service';
// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'product', // CUSTOM HTML SELECTOR 
  templateUrl: 'display_products.component.html', // LINK TO HTML 
  styleUrls: ['display_products.component.css'],  // LINK TO CSS  
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CategoriesComponent]
})
export class DisplayProductsComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private productService: ProductService, private productFilterService: ProductFilterService, private userService: UserService, private cartService: CartService, private messageBoxService: MessageBoxService) { }

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

  // CHECK IF USER IS AUTHENTICATED BEFORE
  // ALLOW THE FOLLOWING METHODS TO EXECUTE
  Authenticated() {
    return this.userService.isAuthenticated();
  }

  ///////////////////////////////////////
  //// METHOD TO ADD PRODUCT TO CART ////
  ///////////////////////////////////////
  addProductToCart(product: any) {
    this.cartService.addToCart(product);
    this.messageBoxService.showSuccessMessage('Product added to cart!');
  }

  /////////////////////////////////////
  //// METHOD TO DELETE A PRODUCT /////
  /////////////////////////////////////
  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe((response) => {
      this.messageBoxService.showSuccessMessage('Product deleted!');
      console.log(response);
    },
      error => {
        console.error('ERROR:', error);
      });
  }

  ////////////////////////////////////////////
  //// METHOD TO ADD PRODUCT TO FAVORITES ////
  ////////////////////////////////////////////
  addToFavorites() {
    this.messageBoxService.showSuccessMessage('Product added to favorites!');
  }
}
