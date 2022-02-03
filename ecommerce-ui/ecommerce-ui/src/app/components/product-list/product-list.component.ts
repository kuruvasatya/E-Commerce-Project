import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/model/product';
import { ProductService } from 'src/app/common/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getProducts().subscribe(
      response => this.products = response
    )
  }
}
