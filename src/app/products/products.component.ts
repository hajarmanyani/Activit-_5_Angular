import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import  Product  from '../model/products.model';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductService]
})
export class ProductsComponent  implements OnInit {
 
  //si on declare private ou public , le constructeur fait l'injection des dépendances automatiquement
  constructor(private productService: ProductService,private router : Router, public appState: AppStateService) {
   }
    ngOnInit(): void {
      this.searchProducts();
    }

    searchProducts(){
     /*this.appState.setProductsState({
        status: "LOADING"
     });*/
     this.productService.searchProducts(this.appState.productsState.keyword,this.appState.productsState.currentPage,this.appState.productsState.pageSize).subscribe(
       { next: (resp)=>{
        let products = resp.body as Product[];
        let totalProducts:number=parseInt(resp.headers.get('X-Total-Count')!);
        let totalPages=Math.floor(totalProducts/this.appState.productsState.pageSize);
        //this.appState.productsState.totalProducts=totalProducts;
        if(totalProducts % this.appState.productsState.pageSize!=0){
          totalPages++;
        }
        this.appState.setProductsState({
          products: products,
          totalProducts: totalProducts,
          totalPages: totalPages,
         // status: "LOADED"
          
        })
      },
        error: err=>{
          this.appState.setProductsState({   
            status: "ERROR",
            errorMessage: err
          })
        }
      })
      //this.products=this.productService.getProducts();
    }

  handleCheckproduct(product: Product){
  this.productService.checkProducts(product).subscribe(updatedProduct=>{
    product.checked=updatedProduct.checked;
  })
  }

  handleDelete(product:Product){
    if(confirm("Etes-vous sure"))
    this.productService.deleteProducts(product).subscribe({ next: deletedProduct=>{ 
    //this.appState.productsState.products.filter((p:any)=>p.id!=product.id);
    this.searchProducts();  
  } 
  }) 
  console.log("delete")  
  }

  handleGotoPage(page:number){
    
    this.appState.productsState.currentPage=page;
    this.searchProducts();
   
  }

  handleEdit(product: Product){
    this.router.navigateByUrl(`/admin/editProduct/${product.id}`);
  }

}
