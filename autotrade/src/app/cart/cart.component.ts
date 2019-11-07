import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarItem } from '../../entities/car-item.entity';
import { CarDetails, DetailsService  } from '../inventory/details/details.service';
import { ProductService } from '../services/product.services';
import * as AOS from 'aos';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  private items: CarItem[] = [];
  private total: number = 0;
  private totalQuantity: number;
  private x: number = 10;

  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean = false;
  private checkout: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private detailsService: DetailsService,
    private cartService: CartService,
  ) { }

    ngOnInit() {
        let id = this.detailsService.getUrl();
        this.initConfig();
        this.items =  this.cartService.items;
        this.total = this.cartService.total;
        this.totalQuantity = this.cartService.totalQuantity;
        AOS.init();

    }

    remove(id){

      this.cartService.remove(id);
      this.cartService.getQuantity(this.cartService.totalQuantity);

      this.total = this.cartService.total;

      this.items = this.items.filter(element => {
        return element.product.id !== id;
      })
    }

    performCheckout(){
        this.checkout = !this.checkout;
    }
 


    private initConfig(): void {
        
        this.payPalConfig = {
        currency: 'MUR',
        clientId: 'sb',

        createOrderOnClient: (data) => <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'MUR',
                value: JSON.stringify(this.total),
                breakdown: {
                  item_total: {
                    currency_code: 'MUR',
                    value: JSON.stringify(this.total),
                  }
                }
              },
              items: [
                {
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'MUR',
                    value: JSON.stringify(this.total),
                  },
                }
              ]
            }
          ]
        },
        advanced: {
          commit: 'true'
        },
        style: {
          label: 'paypal',
          layout: 'vertical'
        },
        onApprove: (data, actions) => {
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          actions.order.get().then(details => {
            console.log('onApprove - you can get full order details inside onApprove: ', details);
          });
        },
        onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
          this.showSuccess = true;
        },
        onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);
        },
        onError: err => {
          console.log('OnError', err);
        },
        onClick: (data, actions) => {
          console.log('onClick', data, actions);
        },
      };
    }
}
