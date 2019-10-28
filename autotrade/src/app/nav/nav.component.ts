import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
// import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  public cartLength = (localStorage.getItem('quantity'));

  currentUser: any;
  currentSocialUser: any;
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private authService: AuthService
    // private cart: CartComponent
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.authenticationService.currentSocialUser.subscribe(x => this.currentSocialUser = x); 
  }

  ngOnInit() {
    document.getElementsByClassName('has-badge')[0].setAttribute('data-count', this.cartLength);
  }
  
  signOut(): void {
    this.authenticationService.logoutSocial(); 
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  navigate() {
    this.router.navigate(['/cart']);
  }
}
