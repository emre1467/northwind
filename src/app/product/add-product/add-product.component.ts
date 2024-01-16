import { ProductService } from './../../services/product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
frm:FormGroup
  constructor(private formBuilder:FormBuilder,private productService:ProductService) {
    this.frm=formBuilder.group({
      productName: [""],
      categoryId: [""],
      quantityPerUnit: [""],
      unitPrice: [""],
      unitsInStock: [""]
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){

    this.productService.addProduct(this.frm.value).subscribe((response)=>{console.log("product added")})

    console.log(this.frm.value)
  }
}
