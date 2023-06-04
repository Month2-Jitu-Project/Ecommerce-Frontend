import { Injectable } from "@angular/core";
import { PRODUCT_MODEL } from "src/abstract_classes/product.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems: PRODUCT_MODEL[] = [];

    addToCart(item: any) {
        this.cartItems.push(item);
    }

    getCartItems() {
        return this.cartItems;
    }
}