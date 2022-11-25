import { wishlistUrl } from './../config/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }



  addToWishlist(row: any) {
    return this.http.post(wishlistUrl, { id: row })
    // console.log(row);
  }






}
