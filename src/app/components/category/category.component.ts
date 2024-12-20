import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnChanges{

  constructor(private _categoryService:CategoryService, private router: Router){}
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  @Input() data!: Category;

  // @Input({ required: true }) title!: string;
  // @Input({ transform : (value:string)=> parseInt(value) }) title!: number;
  @Input({ alias: 't' }) title!: string;

  @Output() d = new EventEmitter();

  deleteChild() {
    this.d.emit(this.data.id);
  }
  toUpdate(){
    console.log(JSON.stringify(this.data));
    this.router.navigate(['/category/update/', JSON.stringify(this.data)])
  }
}
