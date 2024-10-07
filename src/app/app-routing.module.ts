import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent} from './components/not-found/not-found.component' ;
import {ProductsCategoryComponent} from './components/products-category/products-category.component' ;

const routes: Routes = [
  {path:"home",component:HomeComponentComponent},
  {path :"",redirectTo : '/home',pathMatch :'full'},
  {path: "products/:id", component: ProductsCategoryComponent } ,
  {path : "products/:id", component:ProductComponent},
  {path:"**", component :NotFoundComponent} ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
