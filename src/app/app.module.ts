import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ListCategoriesComponentComponent } from './components/list-categories-component/list-categories-component.component';
import { FilterPipe } from './pipe/filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { TestComponent } from './components/test/test.component';
import { CategoryComponent } from './components/category/category.component';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { HttpClientModule }from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListCategoriesComponentComponent,
    FilterPipe,
    HighlightDirective,
    NotFoundComponent,
    FormCategoryComponent,
    CategoryComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TestComponent,
    ValidationMessagesComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
