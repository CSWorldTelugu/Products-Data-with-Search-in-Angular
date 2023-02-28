import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  filteredProducts: any = [];
  allProducts: any = []

  searchInput = ""

  ngOnInit(): void {
    this.http.get("https://fakestoreapi.com/products").subscribe(
      (res) => {
        this.filteredProducts = res;
        this.allProducts = res;
      }
    )
  }

  filterProducts() {
    console.log("d")
    this.filteredProducts = this.allProducts.filter(
      (p) => {
        return p.title.toLowerCase().includes(this.searchInput.toLowerCase())
      }
    )

  }



  sort(order: any) {
    console.log(order)
    if (order == 'asc') {
      this.filteredProducts.sort(
        (p1, p2) => {
          return p1.price > p2.price ? 1 : -1

        }
      )
    }
    else {
      this.filteredProducts.sort(
        (p1, p2) => {
          return p1.price > p2.price ? -1 : 1

        }
      )

    }
  }



}