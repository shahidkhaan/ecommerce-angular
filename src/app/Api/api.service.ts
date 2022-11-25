import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {



  private url = 'https://api.pujakaitem.com/api/products';


  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get(this.url);
  }


  getProductById(id:any){
    return this.http.get('https://api.pujakaitem.com/api/products/'+id);
  }
  

  getProductImageById(image:any){
    return this.http.get('https://api.pujakaitem.com/api/products/'+image);
  }



  getCategories(){
    return this.http.get(this.url );
  }

  

}
