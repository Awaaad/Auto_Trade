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
  public items: CarItem[] = [];
  public total: number = 0;
  public totalQuantity: number = 0;

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
    console.log('totalQuantity',this.totalQuantity)
  }

  getQuantity(){
    return this.totalQuantity;
  }
  
}
