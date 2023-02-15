import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  products: any

  ngOnInit(): void {
    this.http.get("https://fakestoreapi.com/products").subscribe(
      (res) => {
        this.products = res
      }
    )
  }

}
