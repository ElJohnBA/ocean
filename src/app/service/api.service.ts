import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private uriApi = 'https://dummyjson.com/products'

  constructor(private http: HttpClient) { }

  public getProducts() :Observable<any> {
    return this.http.get<any>(this.uriApi);
  }
}
