import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services';
// import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  currentUser: any;
  public cartLength = (localStorage.getItem('quantity'));

  ngOnInit() {
    // console.log("bla", this.cart.loadCart());
    // let cartLength = (localStorage.getItem('quantity'));
    // console.log("cart length", cartLength);
    document.getElementsByClassName('has-badge')[0].setAttribute('data-count', this.cartLength);
  }
  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      // private cart: CartComponent
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

  navigate() {
    this.router.navigate(['/cart']);
  }
}
