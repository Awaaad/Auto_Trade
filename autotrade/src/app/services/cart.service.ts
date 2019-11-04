import { Injectable } from '@angular/core';
import { CarItem } from '../../entities/car-item.entity';
import { CarDetails, DetailsService  } from '../inventory/details/details.service';
import { ProductService } from '../services/product.services';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CarItem[] = [];
  private total: number = 0;
  private totalQuantity: number = 0;

  constructor(private http: HttpClient) { }

  getQuantity(){
    return this.totalQuantity;
  }

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

  remove(id: number): void {
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
    window.location.reload();
  }

}
