import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {
  search :string="";
  id !: number ;
  listProducts : Product[]=[];  
  

  constructor(private activated: ActivatedRoute) {}
  ngOnDestroy() {
    console.log("destroy component");
  }
  ngOnInit() {
    console.log('init component');

  this.listProducts =[
    {
      "id": 1, "name": "Refrigérateur LG Inox", "image": "assets/images/refrigerateur-lg.jpeg", "categoryId": 1, "description": "", "price": 2800, "brand": "LG", "promotion": 0,
      nb_likes: 0,
      quantity:10
    },
    {
      "id": 2, "name": "Refrigérateur Samsung Blanc", "image": "assets/images/refrigerateur_samsung.jpeg", "categoryId": 1, "description": "", "price": 2400, "brand": "Samsung", "promotion": 0,
      nb_likes: 0,
      quantity: 10
    },
    {
      "id": 3, "name": "Lave vaisselle Beko", "image": "assets/images/lave_vaisselle.jpeg", "categoryId": 1, "description": "", "price": 1875, "brand": "BEKO", "promotion": 0,
      nb_likes: 0,
      quantity: 10
    },
    {
      "id": 4, "name": "Oppo Smart Phone", "image": "assets/images/oppo_smart.jpeg", "categoryId": 4, "description": "", "price": 1200, "brand": "OPPO", "promotion": 0,
      nb_likes: 0,
      quantity: 10
    },
    {
      "id": 5, "name": "Hachoir", "image": "assets/images/hachoir.jpeg", "categoryId": 2, "description": "", "price": 120, "brand": "Moulinex", "promotion": 0,
      nb_likes: 0,
      quantity: 10
    },
    {
      "id": 6, "name": "TV 50'' LG", "image": "assets/images/tv_lg.jpeg", "categoryId": 5, "description": "", "price": 1800, "brand": "LG", "promotion": 0,
      nb_likes: 0,
      quantity: 10
    },
  ]
  
  this.id = +this.activated.snapshot.params['id'];
  
  this.listProducts = this.listProducts.filter(
    (pr) => pr.categoryId == this.id
  ); 
}
  

}


