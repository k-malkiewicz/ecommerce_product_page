import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isCartOpened: boolean = false;
  isMobileNavOpened = false;
  item: any;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItem.subscribe((item: any) => this.item = item)
  }

  toggleCartContainer(): void {
    this.isCartOpened = !this.isCartOpened;
  }

  deleteItem(): void {
    this.cartService.cartItem.next(null);
  }

  toggleMobileNav(val: boolean): void {
    this.isMobileNavOpened = val;
  }
}
