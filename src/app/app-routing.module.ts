import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent} from './components/not-found/not-found.component' ;
import {ProductsCategoryComponent} from './components/products-category/products-category.component' ;

const routes: Routes = [
  {path:"home",component:HomeComponentComponent},
  {path :"",redirectTo : '/home',pathMatch :'full'},
  {path : "products/:id", component: ProductsCategoryComponent } ,
  {path : 'product', loadChildren: () => import('./features/product/product.module').then ((m) => m.ProductModule)},
  {path : 'apropos', loadChildren: () => import('./features/apropos/apropos.module').then ((m) => m.AproposModule)},
  {path : 'contact', loadChildren: () => import('./features/contact/contact.module').then ((m) => m.ContactModule)},
  {path : "**", component :NotFoundComponent} ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

function m(value: typeof import("c:/Users/ouday/Desktop/Angular/Project4TWIN5/src/app/features/apropos/apropos.module")): typeof import("c:/Users/ouday/Desktop/Angular/Project4TWIN5/src/app/features/apropos/apropos.module") | PromiseLike<typeof import("c:/Users/ouday/Desktop/Angular/Project4TWIN5/src/app/features/apropos/apropos.module")> {
  throw new Error('Function not implemented.');
}

