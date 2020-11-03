import { Component, OnInit } from '@angular/core';

import { ProductsService, Product } from '../app/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'plantilla';

  products:Product[] = [];
  adicionados:Product[] = [];
  botonesActivados = false;

  constructor(private _productService: ProductsService ){

  }

  ngOnInit(): void{
    this.products = this._productService.getProducts();
  }

  TarjetaAdicionarEliminar(product:any){
    let pos = this.adicionados.indexOf(product);
    console.log(pos);
    if(pos === -1){
      this.botonesActivados = true;
      product.circle = !product.circle;
      this.adicionados.push(product);
    } else {
      product.circle = !product.circle;
      this.adicionados.splice(pos, 1);
      if(pos === 0){
        this.botonesActivados = false;
      }
    }
  }

  eliminarTodo(){
    this.adicionados = [];
    this.botonesActivados = false;
    location.reload(true);
  }

  checkAll(checkbox){
    if(checkbox.checked){
      console.log("Hola mundo");
    }
  }
}
