import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { fakeBackendProvider } from '../_helpers/fake-backend';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from '../_helpers';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MainOneComponent } from './main-one/main-one.component';
import { MainTwoComponent } from './main-two/main-two.component';
import { SalesComponent } from './sales/sales.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { CarouselModule} from 'ngx-carousel-lib';
import { CarDetailsComponent } from './car-details/car-details.component';
import { FilterComponent } from './inventory/filter/filter.component';
import { DetailsComponent } from './inventory/details/details.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { DetailsService } from './inventory/details/details.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OwlModule } from 'ngx-owl-carousel';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductService } from '../app/services/product.services';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactUsComponent,
    InventoryComponent,
    FooterComponent,
    LoginComponent,
    MainOneComponent,
    MainTwoComponent,
    SalesComponent,
    DialogComponent,
    CarDetailsComponent,
    FilterComponent,
    DetailsComponent,
    CartComponent,
    RegisterComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
    OwlModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
    fakeBackendProvider,
    DetailsService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }


