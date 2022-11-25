import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);



  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {

    let productExit = false

    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id === product.id) {
        this.cartItemList[i].quantity++
        productExit = true
        break;
      }

    }
    if(!productExit)
    {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();

    }




  }
  getTotalPrice(): number {
    let grandTotal = 0;
    // this.cartItemList.map((a: any) => {
    //   grandTotal += a.item.price*a.item.quantity;
    // })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })

  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
