import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  constructor(private http: HttpClient) {}

  purchase(product: any) {
    const url = 'http://localhost/angular_api/purchase.php';

    // Set the Content-Type header to application/json
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the HTTP POST request with the headers
    return this.http.post(url, product, { headers: headers });
  }
}
