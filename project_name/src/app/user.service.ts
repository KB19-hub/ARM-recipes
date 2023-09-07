import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(loginData: { usernameEmail: string; password: string; }) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost/angular_api/signup.php'; // Replace this with your PHP file URL

  constructor(private http: HttpClient) { }

  signup(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}
