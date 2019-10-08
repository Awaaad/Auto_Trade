import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { DetailsComponent} from './inventory/details/details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'car-details', component: CarDetailsComponent},
  {path: 'details/:id', component: CarDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
