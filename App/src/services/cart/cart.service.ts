import { Injectable } from "@angular/core";
import { CART_ITEM_MODEL, PRODUCT_MODEL } from "src/abstract_classes/product.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems: CART_ITEM_MODEL[] = [];

    addToCart(item: any) {
        // HANDLE QUANTITY HERE
        item.quantity = 1;
        this.cartItems.push(item);
    }

    // GET ALL ITEMS IN CART
    getCartItems() {
        return this.cartItems;
    }

    // CHECK IF cartItems CONTAINS ITEMS
    hasItems() {
        return this.cartItems.length > 0;
    }

    // CALCULATE TOTAL PRICE 
    calculateTotal(): number {
        let TOTAL: number = 0;
        // LOOP THROUGH cartItems ARRAY
        for (const item of this.cartItems) {
            // ADD item.price TO TOTAL
            TOTAL += item.price * item.quantity;
        }
        return TOTAL;
    }
}