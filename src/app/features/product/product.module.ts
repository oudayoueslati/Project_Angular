import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../../components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FilterProductPipe} from 'src/app/pipe/filter-product.pipe';
import { FormProductComponent } from '../../components/form-product/form-product.component'
import { ProduitComponent } from 'src/app/components/produit/produit.component';
import { ProductsCategoryComponent } from 'src/app/components/products-category/products-category.component'
import { ValidationMessagesComponent } from 'src/app/components/validation-messages/validation-messages.component';




@NgModule({
  declarations: [
    ProductComponent,
    FilterProductPipe,
    FormProductComponent,
    ProduitComponent,
    ProductsCategoryComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationMessagesComponent
  ],
})
export class ProductModule { }

