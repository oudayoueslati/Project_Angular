import { AstTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit{

  product! : FormGroup;
  search! : FormControl;
  ngOnInit(): void {
    this.search = new FormControl();
    this.product = new FormGroup({
      name : new FormControl("Test",[Validators.required]),
      image : new FormControl(),
      description : new FormControl(),
      price : new FormControl(),
      brand : new FormGroup({
        name : new FormControl("",[Validators.minLength(3)]),
        logo : new FormControl()
      }),
      promotion : new FormControl(),
      quantity: new FormControl(),
      nb_likes : new FormControl({value :'0', disabled:true}),
      tags : new FormArray([new FormControl()])
    })

  }
  get tags() : FormControl[] {
    return (this.product.get('tags') as FormArray)!.controls as FormControl[];
  }
  addTags (){
    this.tags.push(new FormControl());
  }
  get name(){
    return this.product.get('name') as FormControl;
  }
  get brandName(){
    return this.product.get('brand')!.get('name') as FormControl;
  }
submit(){
  console.log((this.product.get('tags') as FormArray))
  console.log(this.product.get('name'))
  console.log(this.product.get('brand')!.get('name'))
  console.log(this.product.getRawValue())
}
}
