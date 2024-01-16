import { ProductService } from './../../services/product.service';
import { Spinner } from './../../../../node_modules/ngx-spinner/lib/ngx-spinner.enum.d';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // CommonModule burada import edilmeli
import {  NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private productService:ProductService) { 
  }
  data: any
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: any) => {
      this.data = products;
      console.log(this.data);
    });
  }


}
