import {Action} from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductsActionsTypes{
  /*Get All Products*/
  GET_ALL_PRODUCTS="[Products] Get all product",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get all product Success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get all product Error",

  /*Get Selected Products*/
  GET_SELECTED_PRODUCTS="[Products] Get Selected product",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected product Success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected product Error",
}

/*GET ALL PRODUCT*/
export class GetAllProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class GetAllProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class GetAllProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/*GET SELECTED PRODUCT*/
export class GetSelectedProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class GetSelectedProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}


export type ProductActions =
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError |
GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
;
