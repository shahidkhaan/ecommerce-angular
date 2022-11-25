import { map } from 'rxjs/operators';
import { filter } from 'rxjs';
import { ApiService } from './../../Api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoriesList: any = [];


  // selectedCategoryId = '6000000';

  // filteredPosts$ = this.posts$.pipe(map(posts =>{
  //   return posts.filter(posts => post.catr === this.categoriesList)
  // }))


  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data) => {
      // console.log("Categories" + data);
      this.categoriesList = data;
      // this.category =  JSON.stringify(this.categoriesList);
    });

  }



  // removeDuplicates(): any {
  //   this.categoriesList.forEach((item:any) => {
  //     if (this.result.indexOf(item) < 0) {
  //       this.result.push(item);
  //     }
  //   });
  //   return this.result;
  // }

  

}
