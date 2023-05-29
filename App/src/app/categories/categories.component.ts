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

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent {
   // SET isActive STATE TO false
   isActive: boolean = false;
   // INJECT SHARED SERVICE
   constructor(private sharedService: SharedService) { }
 
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
 
   // DEFAULT FORM INPUT VALUES
   defaultParams = {
     phones: 'Phones...',
     laptops: 'Laptops...',
     gaming: 'Gaming...',
     desktops: 'Desktops...',
   };
 
   ngAfterViewInit() {
    
   }
 
   closeCategoriesForm() {
     this.sharedService.closeCategoriesForm();
   }
 
   showCategories() {
     
   }
}
