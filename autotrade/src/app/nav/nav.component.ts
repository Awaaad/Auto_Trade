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
  resetQuantity: any = 0;

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
    
    var myNav = document.getElementById("bs-example-navbar-collapse-1");
    var menu = myNav.getElementsByClassName("nav-link");
    for (var i = 0; i < menu.length; i++) {
      menu[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
      }); }
  }
  
  
  signOut(): void {
    this.authenticationService.logoutSocial(); 
    localStorage.removeItem('cart');
    localStorage.setItem('quantity', JSON.stringify(this.resetQuantity));
    window.location.reload();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    localStorage.removeItem('cart');
    localStorage.setItem('quantity', JSON.stringify(this.resetQuantity));
    window.location.reload();
  }

  navigate() {
    this.router.navigate(['/cart']);
  }

  toggleMenu(){
      let menuBox = document.getElementById('bs-example-navbar-collapse-1');
      
      menuBox.classList.remove('in');
  }
}
