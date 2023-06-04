import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faCartPlus, faDoorOpen, faTrash, faClose, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from 'src/services/cart/cart.service';
import { SharedService } from 'src/services/forms/shared.service';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.css'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, RouterModule, RouterOutlet, FormsModule],
    providers: [NgModel]
})
export class CartComponent implements OnInit {
    // SET isActive STATE TO false
    isActive: boolean = false;
    // FONTAWESOME ICONS
    cartIcon: IconDefinition = faCartPlus;
    closeIcon: IconDefinition = faClose;
    doorIcon: IconDefinition = faDoorOpen;
    trashIcon: IconDefinition = faTrash;
    handIcon: IconDefinition = faHandPointRight;

    // INJECT CartService
    constructor(public cartService: CartService, private sharedService: SharedService, private ngModel: NgModel) { }

    ngOnInit(): void {
        this.sharedService.cart$.subscribe(active => {
            this.isActive = active;
        });
    }

    getCartItems() {
        return this.cartService.getCartItems();
    }

    // METHOD FOR CLOSING cart
    closeCart() {
        this.sharedService.closeCart();
    }

    // GET CART TOTAL
    getCartTotal(): number {
        return this.cartService.calculateTotal();
    }

    // INITIALIZE cartTotal
    cartTotal: number = 0;

    // UPDATE VALUE OF cartTotal FROM 0 
    updateCartTotal(): void {
        this.cartTotal = this.getCartTotal();
    }

    // UPDATE CART TOTAL ON QUANTITY CHANGE
    onQuantityChange(): void {
        this.updateCartTotal();
    }
}