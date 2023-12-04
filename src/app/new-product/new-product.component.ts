import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import Product from '../model/products.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css',
  providers: [ProductService]
})
export class NewProductComponent implements OnInit {
  public productForm!: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      price: this.fb.control(0),
      checked: this.fb.control(false),
    });
  }

  saveProductt() {
    
    let product = this.productForm.value;
    this.productService.saveProduct(product).subscribe({
      next: value => {
       alert(JSON.stringify(value));
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
