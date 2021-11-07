import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ProductsState, ProductStateEnum} from "../../NgRx/products.reducers";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productsState$! : Observable<ProductsState>;
  readonly ProductStateEnum = ProductStateEnum;
  constructor(private store : Store<any>) { }

  ngOnInit(): void {
      this.productsState$ = this.store.pipe(
        map((state)=> state.catalogueState)
      );
  }

}
