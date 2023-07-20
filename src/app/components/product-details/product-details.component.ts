import { Component, ViewEncapsulation } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent {
  quantity: number = 0;

  constructor(public cartService: CartService) {}

  substrQuantity(): void {
    this.quantity--;
  }

  addQuantity(): void {
    this.quantity++;
  }

  checkInputValue(): void {
    if (this.quantity < 1) {
      this.quantity = 1;
    }

    if (this.quantity > 100) {
      this.quantity = 100;
    }
  }

  handleCart(): void {
    if (this.quantity > 0) {
      let total = `\$${(125 * this.quantity).toFixed(2)}`;
      this.cartService.addNewItem(
        { product: "Fall Limited Edition Sneakers", price: "$125.00", quantity: this.quantity, totalCost: total}
      )
    }
  }
}
