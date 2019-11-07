import { Injectable } from '@angular/core';
import { CarItem } from '../../entities/car-item.entity';
import { CarDetails, DetailsService  } from '../inventory/details/details.service';
import { ProductService } from '../services/product.services';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  unsubscribe() {
    throw new Error("Method not implemented.");
  }
  public items: CarItem[] = [];
  public total: number = 0;
  public totalQuantity: number = 0;
  public Quantity = new BehaviorSubject<number>(this.totalQuantity);
  castQuantity = this.Quantity.asObservable();

  constructor(private http: HttpClient) { }

  loadCart(): void {
    this.total = 0;
    this.totalQuantity = 0;
    this.items = [];
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i++) {
        const item = JSON.parse(cart[i]);
        this.items.push({
            product: item.product,
            quantity: item.quantity
        });
        this.total += item.product.price * item.quantity;
        this.totalQuantity += 0 + item.quantity;
    }
    localStorage.setItem('quantity', JSON.stringify(this.totalQuantity));
  }


  remove(id: number): void{
    const cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (let i = 0; i < cart.length; i++) {
        const item: CarItem = JSON.parse(cart[i]);
        if (item.product.id === id) {
            cart.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
    // window.location.reload();
  }

  public getQuantity(totalQuantity){
    this.Quantity.next(totalQuantity);
  }

}
