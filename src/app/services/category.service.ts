import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {}
  categories : Category[] = [
    {"id":1,"title":"Grand électroménager",
  "image":"assets/images/categorie_electromenager.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "available":true},
  
  {"id":2,"title":"Petit électroménager",
  "image":"assets/images/categorie_petit_electromenager.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "available":true},
  
  {"id":3,"title":"Produits informatiques",
  "image":"assets/images/categorie_produits_informatiques.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "available":true},
  
  {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
  "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "available":true},
  
  {"id":5,"title":"TV, images et son",
  "image":"assets/images/categorie_tv_image_son.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "available":true},
  
  {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
  "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","available":false},
  ]

  getCategories(){
    return this.categories;
  }
  addCategory(category : Category){
    this.categories.push(category);
  }

  listProducts : Product[]=[{
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
  }];  
  getProduct(){
    return this.listProducts;
  }
  addProduct(product){
    return this.listProducts.push(product);
  }
}
