import { ApiService } from 'src/app/Api/api.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss']
})
export class DetailProductsComponent implements OnInit {

  id: any;

  product: any = [];

  productImage!: [];

  productList: any = [];

  productQuntity: number = 1;

  productID = this.router.paramMap.pipe(
    map(params => params.get('id')));

  constructor(private router: ActivatedRoute, private api: ApiService,) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.getProductByid(this.id);
  }



  getProductByid(id: any) {
    this.api.getProductById(id).subscribe((res) => {
      this.product = res;
      console.log(this.product.image[0].url);
    });
  }


  handleQuntity(val: string) {

    if (this.productQuntity < 20 && val === 'plus') {
      this.productQuntity = this.productQuntity + 1;
    }
    if (this.productQuntity > 1 && val === 'min') {
      this.productQuntity = this.productQuntity - 1;
    }

  }


  handleQuntityadd() {
    if (this.product) {

      this.product.quantity = this.productQuntity;
      // console.log(this.product);



    }


  }



}
