// THIS IS THE ROOT COMPONENT OF THE APP
import { Component } from '@angular/core';
// ICONS
import { faTrashCan, faPlus, faCartShopping, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from 'src/product.model';
// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'product', // CUSTOM HTML SELECTOR 
  templateUrl: './product.component.html', // LINK TO HTML 
  styleUrls: ['./product.component.css']  // LINK TO CSS  
})
export class ProductComponent {
  // LOGIC GOES HERE
  // FONT AWESOME ICONS
  plusIcon = faPlus;
  deleteIcon = faTrashCan;
  cartIcon = faCartShopping;
  heartIcon = faHeart;
  ellipsisIcon = faEllipsis;

  // PLACEHOLDER CONTENT
  products: ProductModel[] = [
    {
      productImage: './assets/images/placeholder_images/xbox_set.jpg',
      productTitle: 'Xbox One',
      productPrice: 150,
      productDescription: `
        The Xbox One is powered by an AMD "Jaguar" Accelerated Processing Unit (APU) with two quad-core modules totaling eight x86-64 //cores clocked at 1.75 GHz.
      `
    },
    {
      productImage: './assets/images/placeholder_images/ps5_blu_ray_edition.webp',
      productTitle: 'PS5',
      productPrice: 200,
      productDescription: `
        The PlayStation 5 is powered by a custom system on a chip (SoC) designed in tandem by AMD and Sony, integrating a custom 7 nm AMD Zen 2 CPU with eight cores running at a variable frequency capped at 3.5 GHz.
      `
    },
    {
      productImage: './assets/images/placeholder_images/steamdeck.webp',
      productTitle: 'Steamdeck',
      productPrice: 80,
      productDescription: `
        It's a Nintendo Switch alternative more than anything else, only bigger and more powerful, and with a separately sold Dock.
      `
    },
    {
      productImage: './assets/images/placeholder_images/xbox_controller.jpg',
      productTitle: 'Xbox One Controller',
      productPrice: 70,
      productDescription: `
        Make your gaming experience more immersive with Xbox accessories and controllers for Xbox Series X|S and Xbox One consoles, Windows, and mobile gaming.
      `
    },
    {
      productImage: './assets/images/placeholder_images/switcholed.webp',
      productTitle: 'Nintendo Switch',
      productPrice: 180,
      productDescription: `
        The PlayStation 5 is powered by a custom system on a chip (SoC) designed in tandem by AMD and Sony, integrating a custom 7 nm AMD Zen 2 CPU with eight cores running at a variable frequency capped at 3.5 GHz.
      `
    },
    {
      productImage: './assets/images/placeholder_images/steamdeck.webp',
      productTitle: 'Steamdeck',
      productPrice: 80,
      productDescription: `
        It's a Nintendo Switch alternative more than anything else, only bigger and more powerful, and with a separately sold Dock.
      `
    }
  ];

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
