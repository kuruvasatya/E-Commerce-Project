import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../model/product';
import { GetResponse } from '../model/get-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:8080/api/products";
  
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.baseUrl)
    .pipe(
      map(response => response._embedded.products),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      return throwError( `Error: ${error.error.message}`);
    } else {
      return throwError(`${error.status}`);
    }
  }
}
