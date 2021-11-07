import {Injectable} from "@angular/core";
import {ProductServiceService} from "../services/product-service.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetAllProductsActionError,
  GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess,
  ProductActions,
  ProductsActionsTypes
} from "./products.actions";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class ProductsEffects{

  constructor(private productService:ProductServiceService, private effectsActions:Actions) {
  }

  /*Get Products*/
  getAllProductEffects :Observable<Action> = createEffect(
    ()=> this.effectsActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action)=>{
        return this.productService.getAllProduct()
          .pipe(
            map((products)=> new GetAllProductsActionSuccess(products)),
            catchError((err)=>of(new GetAllProductsActionError(err)))
          )
      })
    )
  );

  /*Get Selected Products*/
  getSelectedProductEffects :Observable<Action> = createEffect(
    ()=> this.effectsActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action)=>{
        return this.productService.getSelectedProduct()
          .pipe(
            map((products)=> new GetSelectedProductsActionSuccess(products)),
            catchError((err)=>of(new GetSelectedProductsActionError(err)))
          )
      })
    )
  );

}
