import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarItem } from '../../entities/car-item.entity';
import { CarDetails, DetailsService  } from '../inventory/details/details.service';
import { ProductService } from '../services/product.services';
import * as AOS from 'aos';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private items: CarItem[] = [];
  private total: number = 0;
  private totalQuantity: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private detailsService: DetailsService
  ) { }

    ngOnInit() {
        let id = this.detailsService.getUrl();
        this.loadCart();
        AOS.init();
    }

    loadCart(): void {
        this.total = 0;
        this.totalQuantity = 0;
        this.items = [];
        const cart = JSON.parse(localStorage.getItem('cart'));
        // tslint:disable-next-line: prefer-for-of
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
