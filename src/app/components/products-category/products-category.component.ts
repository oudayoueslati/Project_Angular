import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {
  search :string="";
  id !: number ;
  listProducts : Product[]=[];  
  

  constructor(private activated: ActivatedRoute, private _categoryservice:CategoryService) {}

  ngOnDestroy() {
    console.log("destroy component");
  }
  ngOnInit() {
    console.log('init component');

  this.listProducts =[]
  
  this.id = +this.activated.snapshot.params['id'];
  
  this.listProducts=this._categoryservice.getProduct();
  
  this.listProducts = this.listProducts.filter(
    (pr) => pr.categoryId == this.id
  ); 

  
}
shortList: any[] = []; 
onAddToShortlist(product: any) {
  this.shortList.push(product);  
}
}


