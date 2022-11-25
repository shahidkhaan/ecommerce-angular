import { CheckoutComponent } from './component/checkout/checkout.component';
import { CartComponent } from './component/cart/cart.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { DetailProductsComponent } from './component/detail-products/detail-products.component';

const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},

  {path:'login', component: LoginComponent},

  {path:'signup', component: SignupComponent},

  {path:'home', component: ProductsListComponent},

  {path:'cart', component: CartComponent},

  {path:'checkout', component: CheckoutComponent},

  {path:'products-detail/:id', component: DetailProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
