import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORT FONTAWESOME ICONS
import {
  faHome,
  faPlusCircle,
  faCartShopping,
  faArrowCircleUp,
  faLock,
  faClose
} from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/services/forms/shared.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesService } from 'src/services/categories/categories.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,FormsModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent {
  selectedCategories : { [key: string]: boolean }  = {
    all: false,
    phones: false,
    laptops: false,
    gaming: false,
    desktops: false
  };

  filteredProducts: any[] = [];

  filterProducts() {
    const selectedCategories = Object.keys(this.selectedCategories)
      .filter(category => this.selectedCategories[category]);

    this.categoriesService.getFilteredProducts(selectedCategories)
      .subscribe(response => {
        this.filteredProducts = response.products;
      });
  }


   // SET isActive STATE TO false
   isActive: boolean = false;
   // INJECT SHARED SERVICE
   constructor(private sharedService: SharedService,private categoriesService:CategoriesService) { }
 
   ngOnInit(): void {
     this.sharedService.categoriesForm$.subscribe(active => {
       this.isActive = active;
     });
   }
   
   // FONT AWESOME ICONS
   homeIcon = faHome;
   plusIcon = faPlusCircle;
   cartIcon = faCartShopping;
   upIcon = faArrowCircleUp;
   lockIcon = faLock;
   closeIcon = faClose;
 
 
   ngAfterViewInit() {
    
   }
 
   closeCategoriesForm() {
     this.sharedService.closeCategoriesForm();
   }
 
   showCategories() {
     
   }
}
