import { Injectable } from '@angular/core';

@Injectable()

export class ProductsService {

  private products:Product[] = [
    {
      idx: 1,
      name: "Llanta",
      img: "assets/img/product_img.svg",
      price: 50000,
      circle: false,
      stock: 1
    },
    {
      idx: 2,
      name: "Llanta",
      img: "assets/img/product_img.svg",
      price: 45000,
      circle: false,
      stock: 1
    },
    {
      idx: 3,
      name: "Llanta",
      img: "assets/img/product_img.svg",
      price: 40000,
      circle: false,
      stock: 1
    },
    {
      idx: 4,
      name: "Llanta",
      img: "assets/img/product_img.svg",
      price: 40000,
      circle: false,
      stock: 2
    },
    {
      idx: 5,
      name: "Llanta",
      img: "assets/img/product_img.svg",
      price: 40000,
      circle: false,
      stock: 2
    },
    {
      idx: 6,
      name: "Llanta",
      img: "assets/img/product_img.svg",
      price: 40000,
      circle: false,
      stock: 2
    },


  ];

constructor(){
    console.log("Servicios listos para usar");
}

getProducts(){
    return this.products;
}

}

export interface Product{
idx: number;
name: string;
img: string;
price: number;
circle: boolean;
stock: number;
}
