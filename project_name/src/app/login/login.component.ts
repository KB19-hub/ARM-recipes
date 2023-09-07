import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    usernameEmail: '',
    password: ''
  };
  loginSuccessMessage: string = '';
  loginErrorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    // Check for client-side validation
    if (!this.isLoginFormValid()) {
      return;
    }

    // Assuming you have a login method in AuthService that handles authentication with the server
    this.authService.login(this.loginData).subscribe(
      (response: any) => {
        console.log(response.message);

        if (response.error) {
          // Handle login error from the server
          this.loginSuccessMessage = ''; // Clear the success message
          this.loginErrorMessage = response.error; // Set the error message
        } else {
          // Handle login success
          this.loginSuccessMessage = response.message; // Set the success message
          this.loginErrorMessage = ''; // Clear the error message

          // Clear the fields and messages after 3 seconds
          setTimeout(() => {
            this.loginData.usernameEmail = '';
            this.loginData.password = '';
            this.loginSuccessMessage = '';
            this.loginErrorMessage = '';
          }, 3000);

          // Set isLoggedIn to true after successful login
          this.authService.setLoggedIn(true);

          // Redirect to the home page after successful login
          this.router.navigate(['/home']);
        }
      },
      (error: any) => { // Explicitly define the 'error' parameter type
        console.error(error);
        // Handle error, e.g., show an error message
        this.loginSuccessMessage = ''; // Clear the success message
        this.loginErrorMessage = 'Login failed. Please try again.'; // Set the error message
      }
    );
  }

  isLoginFormValid(): boolean {
    // Implement the client-side validation logic for the login form here
    // For example, check if the username/email and password are not empty
    if (!this.loginData.usernameEmail || !this.loginData.password) {
      this.loginErrorMessage = 'Please enter your username/email and password.';
      return false;
    }

    this.loginErrorMessage = ''; // Clear error message if form is valid
    return true;
  }
}
