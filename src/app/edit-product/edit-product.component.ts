import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import Product from '../model/products.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
  providers: [ProductService]
})
export class EditProductComponent implements OnInit {
productId!:number;
productFormGroup! : FormGroup;

constructor(private fb:FormBuilder,private productService:ProductService,private activatedRoute:ActivatedRoute) { } 

ngOnInit(): void {
  this.productId=this.activatedRoute.snapshot.params['id'];
  this.productService.getProductById(this.productId).subscribe(
    { next: (product)=>{
      this.productFormGroup=this.fb.group({
      id: this.fb.control(product.id),
      name: this.fb.control(product.name,Validators.required),
      price: this.fb.control(product.price,[Validators.min(100)]),
      checked: this.fb.control(product.checked)
      })
    },
    error: err=>{
      console.log(err);
    }
  });
}

updateProduct(){
  let product : Product = this.productFormGroup.value;
  this.productService.updateProduct(product).subscribe({  
    next: updatedProduct=>{
      alert(JSON.stringify(updatedProduct));
    },
    error: err=>{
      console.log(err);
    }
  });
}
}
