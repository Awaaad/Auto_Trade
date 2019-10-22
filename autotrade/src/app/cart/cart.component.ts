import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarItem } from '../../entities/car-item.entity';
import { CarDetails, DetailsService  } from '../inventory/details/details.service';
import { ProductService } from '../services/product.services';

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
    // this.activatedRoute.params.subscribe(params => {
	// 	var id = params['id'];
		let id = this.detailsService.getUrl();
			// if (id) {
			// 	var item: CarItem = {
			// 		product: this.productService.find(id),
			// 		quantity: 1
			// 	};
			// 	if (localStorage.getItem('cart') == null) {
			// 		let cart: any = [];
			// 		cart.push(JSON.stringify(item));
			// 		localStorage.setItem('cart', JSON.stringify(cart));
			// 	} else {
			// 		let cart: any = JSON.parse(localStorage.getItem('cart'));
			// 		let index: number = -1;
			// 		for (var i = 0; i < cart.length; i++) {
			// 			let item: CarItem = JSON.parse(cart[i]);
			// 			if (item.product.id == id) {
			// 				index = i;
			// 				break;
			// 			}
			// 		}
			// 		if (index == -1) {
			// 			cart.push(JSON.stringify(item));
			// 			localStorage.setItem('cart', JSON.stringify(cart));
			// 		} else {
			// 			let item: CarItem = JSON.parse(cart[index]);
			// 			item.quantity += 1;
			// 			cart[index] = JSON.stringify(item);
			// 			localStorage.setItem("cart", JSON.stringify(cart));
			// 		}
			// 	}
			// 	this.loadCart();
			// } else {
				this.loadCart();
			// }
		// });
	}

	loadCart(): void {
		this.total = 0;
		this.totalQuantity = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
			this.totalQuantity += 0 + item.quantity;
		}
		localStorage.setItem("quantity", JSON.stringify(this.totalQuantity));
	}

	remove(id: number): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: CarItem = JSON.parse(cart[i]);
			if (item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
		window.location.reload();
	}


}
