import { Component,EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  
  @Input() d! : Product;
  
  increment (Product:Product) {
    Product.nb_likes ++;
      }
      buy (Product:Product) {
        Product.quantity --;
          }
}
