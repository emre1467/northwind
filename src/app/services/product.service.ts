  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, tap } from 'rxjs';

  import { BehaviorSubject } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    private apiUrl = 'https://localhost:7116/api/Product';
    private productsSubject = new BehaviorSubject<any[]>([]);
  
    constructor(private http: HttpClient) {
      this.fetchProducts();
    }
  
    fetchProducts() {
      this.http.get<any[]>(this.apiUrl).subscribe(
        (products) => {
          this.productsSubject.next(products);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  
    getProducts(): Observable<any[]> {
      return this.productsSubject.asObservable();
    }
  
    addProduct(productData: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, productData).pipe(
        tap(() => {
          // Yeni bir ürün eklendiğinde ürün listesini yeniden yükle
          this.fetchProducts();
        })
      );
    }
  }
  