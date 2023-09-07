import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost/angular_api/login.php'; // Replace this with your PHP file URL

  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post(this.apiUrl, loginData);
  }
}
