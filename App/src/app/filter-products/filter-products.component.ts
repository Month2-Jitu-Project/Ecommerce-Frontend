// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProductService } from 'src/services/products/products.service';

// @Component({
//   selector: 'app-filter-products',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './filter-products.component.html',
//   styleUrls: ['./filter-products.component.css']
// })
// export class FilterProductsComponent {
//   selectedCategories = {
//     all: false,
//     phones: false,
//     laptops: false,
//     gaming: false,
//     desktops: false
//   };

//   filteredProducts: any[] = [];

//   constructor(private productService: ProductService) { }

//   filterProducts() {
//     const selectedCategories = Object.keys(this.selectedCategories)
//       .filter(category => this.selectedCategories[category]);

//     this.productService.getFilteredProducts(selectedCategories)
//       .subscribe(response => {
//         this.filteredProducts = response.products;
//       });
//   }
// }
