import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  listProducts: Product[] = [
    { id:1 , name: 'Coca Cola', description: 'Bebida', price: 800, stock: 5 },
    { id:2 , name: 'Cola Cao', description: 'Cereal con Chocolate', price: 1000, stock: 10 },

  ]

}
