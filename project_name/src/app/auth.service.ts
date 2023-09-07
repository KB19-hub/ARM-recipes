// authService.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/angular_api/login.php'; // Replace this with your PHP file URL
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) { }

  login(loginData: any): Observable<any> {
    // Implement the login logic here and call the server to authenticate the user
    // For this example, we'll assume the server responds with a JSON object containing the login status.

    // Replace this with your actual login API call.
    return this.http.post(this.apiUrl, loginData);
  }

  logout() {
    // Implement the logout logic here.
    // For this example, we'll just set the loggedIn status to false.
    this.loggedIn.next(false);
  }

  // Add this method to update isLoggedIn to true after successful login
  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }
    // Method to check if the user is logged in
    isLoggedInValue(): boolean {
      return this.loggedIn.value;
    }
}
