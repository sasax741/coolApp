import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id: 1,
      name: 'egg',
      category: 'Food',
      description: 'Lorem egg',
      price: 1,
    },

    {
      id: 2,
      name: 'manaos',
      category: 'drink',
      description: 'Lorem manaos',
      price: 4,
    },

  ];

  getAllProducts(){
    return this.products;
  }
  getProductsById(id){
    return this.products.filter((product) => product.id == id );
    
  }
}