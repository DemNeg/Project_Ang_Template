import {Component, Input, OnInit} from '@angular/core';
import {ProductsState} from "../../../NgRx/products.reducers";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() state! : ProductsState;
  constructor() { }

  ngOnInit(): void {
  }

}
