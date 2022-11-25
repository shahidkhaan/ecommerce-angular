import { map } from 'rxjs/operators';
import { WishlistService } from './../../Api/wishlist.service';
import { CartService } from './../../Api/cart.service';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ApiService } from 'src/app/Api/api.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {




  productList: any = [];


  objdata!: string;

  login!: string;

  searchText: string = '';

  public products: any = [];

  public grandTotal !: number;

  categoriesList: any = [];

  arr: any = [];

  item: any;

  allCategories: any = [];


  selectCategoryId = '';


  rangePrice: string = '';

  @Input() addedToWishlist!: boolean;



  @Output() seleceted = new EventEmitter<any>();





  constructor(private api: ApiService,
    private router: Router,
    private cartService: CartService, private wishlistService: WishlistService) { }

  ngOnInit(): void {

    this.api.getProducts().subscribe((data) => {
      console.log(data);
      this.productList = data;
      this.login = this.router.url;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });


      this.cartService.getProducts()
        .subscribe(res => {
          this.products = res;
          this.grandTotal = this.cartService.getTotalPrice();
        })
      // console.log("i am here"+this.products);
    });


    this.api.getProducts().subscribe((data) => {

      this.categoriesList = data;

      const catArr: number[] = [];
      for (var row of this.categoriesList) {
        catArr.push(row.category);
      }
      this.allCategories = catArr.filter((n, i) => catArr.indexOf(n) === i);
      console.log(this.allCategories);

    });
  }


  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);

  }

  productdetail(row: any) {

    this.seleceted.emit(row);
    // console.log(row);
  }


  handleRemoveFromWishlist(row: any) {
    this.wishlistService.addToWishlist(row).subscribe(() => {
      this.addedToWishlist = true;
    })
    //  console.log(row);

  }


  handleAddToWishlist(row: any) {

  }


  allCategory() {
    console.log("allCategory");

  }





  onCategoryChange(event: Event) {
    let selectCategoryId = (event.target as HTMLSelectElement).value;

    this.searchText = selectCategoryId;

  }



  priceRange(event: Event) {




    this.rangePrice = (event.target as HTMLSelectElement).value;


    this.searchText = this.rangePrice;

    
    console.log(this.searchText);

  }

}
