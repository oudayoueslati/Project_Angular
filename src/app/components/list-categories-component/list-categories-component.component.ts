import { Component, ViewChild ,ViewChildren, QueryList, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { TestComponent } from '../test/test.component';
import { CategoryComponent } from '../category/category.component';
import { CategoryService } from 'src/app/services/category.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrls: ['./list-categories-component.component.css']
})
export class ListCategoriesComponentComponent implements OnInit {

@ViewChild('child') testComponent : TestComponent;
@ViewChild('i') input!: HTMLInputElement;
@ViewChildren(CategoryComponent) children!: QueryList<CategoryComponent>;

constructor(private router:Router, private _categoryservice:CategoryService, private _consumer:ConsumerService){}
ngOnInit(): void{
    this.categories=this._categoryservice.getCategories();
    this._consumer.get<Category[]>('category').subscribe({
    next: (data) => this.categories = data,
    error : (e) => console.log(e),
    complete : () => console.log('Terminé') 
  })
}
ngOnDestroy(): void {

}
ngAfterViewInit() : void {
  console.log(this.testComponent.test);
  this.testComponent.start();
}

title : string ='';
test: string = '10';
categories : Category[] = []

afficheDescription(id: number) {
   //foreach : ES
   this.categories.forEach((element) => {
    if (element.id == id) {
      alert(element.description);
    }
  });
  //filter : ES
  let category = this.categories.filter((element) => element.id == id)[0];
  alert(category.description);
}
changeTest() {
  this.test = '12';
}
DeleteCategory(event: any) {
  console.log(event)
  this._consumer.get<Product[]>('product')
  .subscribe({
    next: (data) => {
       data.forEach((element) => {
         console.log(element);
         element.categoryId == event && this._consumer.delete<Product>('product',element.id).subscribe()
       });
      this._consumer.delete<Category>('category', event).subscribe({
        next:()=> this.categories = this.categories.filter((c) => c.id != event)

      })   
  }
})
}
}
