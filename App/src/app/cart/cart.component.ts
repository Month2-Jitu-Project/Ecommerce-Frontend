import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faCartShopping, faPlus, faMinus, faDoorOpen, faTrash, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from 'src/services/cart/cart.service';

@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.css'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, RouterModule, RouterOutlet]
})
export class CartComponent {
    // FONTAWESOME ICONS
    cartIcon: IconDefinition = faCartShopping;
    plusIcon: IconDefinition = faPlus;
    minusIcon: IconDefinition = faMinus;
    doorIcon: IconDefinition = faDoorOpen;
    trashIcon: IconDefinition = faTrash;
    handIcon: IconDefinition = faHandPointRight;

    // INJECT CartService
    constructor(private cartService: CartService) { }

    
}