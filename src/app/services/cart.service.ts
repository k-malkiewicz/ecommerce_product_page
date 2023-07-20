import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItem: Subject<any> = new Subject<any>();

  addNewItem(item: any): void {
    this.cartItem.next(item);
  }
}
