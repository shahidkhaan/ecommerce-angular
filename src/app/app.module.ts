import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { SearchComponent } from './component/search/search.component';
import { DetailProductsComponent } from './component/detail-products/detail-products.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CheckoutComponent,
    CategoriesComponent,
    SearchComponent,
    DetailProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng5SliderModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
