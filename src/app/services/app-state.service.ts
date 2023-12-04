import { Injectable } from '@angular/core';
import Product from '../model/products.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public productsState= {
    keyword:"",
    products : [] as Product[],
    totalPages:0,
    pageSize: 3,
    currentPage: 1,
    totalProducts:0,
    status: "",
    errorMessage: ""

  }

  public authState: any= {
    username: "",
    roles : [],
    isAuthenticated: false,
    token: ""
  }

  public setAuthState(state:any): void{

    this.authState={...this.authState,...state};

  }
  constructor() { }
  public setProductsState(productsState:any): void{
    this.productsState={...this.productsState,...productsState};
  }
}
