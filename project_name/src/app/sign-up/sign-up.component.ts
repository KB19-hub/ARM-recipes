import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  onSubmit() {
    // Check for client-side validation
    if (!this.isFormValid()) {
      return;
    }

    this.userService.signup(this.userData).subscribe(
      (response: any) => {
        console.log(response.message);

        if (response.error) {
          // Handle error from the server
          this.successMessage = ''; // Clear the success message
          this.errorMessage = response.error; // Set the error message
        } else {
          // Handle success
          this.successMessage = 'Sign-up successful!'; // Set the success message
          this.errorMessage = ''; // Clear the error message

          // Clear the form fields after successful sign-up
          this.clearFormFields();

          // Hide success message after 5 seconds
          setTimeout(() => {
            this.successMessage = '';
          }, 5000);
        }
      },
      (error) => {
        console.error(error);
        // Handle error, e.g., show an error message
        this.successMessage = ''; // Clear the success message
        this.errorMessage = 'Sign-up failed. Please try again.'; // Set the error message

        // Clear the form fields after an error
        this.clearFormFields();

        // Hide error message after 5 seconds
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
      }
    );
  }
  isFormValid(): boolean {
    const usernamePattern = /^[a-zA-Z]{5,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Ensure email ends with @gmail.com
    const passwordPattern = /^.{8,}$/;

    if (!usernamePattern.test(this.userData.username)) {
      this.errorMessage = 'Username must have at least 5 letters.';
      return false;
    }

    if (!emailPattern.test(this.userData.email)) {
      this.errorMessage = 'Invalid email format (example@gmail.com).';
      return false;
    }

    if (!passwordPattern.test(this.userData.password)) {
      this.errorMessage = 'Password must contain at least 8 characters.';
      return false;
    }

    this.errorMessage = ''; // Clear error message if form is valid
    return true;
  }
  clearFormFields() {
    this.userData.username = '';
    this.userData.email = '';
    this.userData.password = '';
  }
  
    // Open the Terms & Privacy modal
    openTermsModal() {
      const modal = document.getElementById('termsModal');
      if (modal) {
        modal.style.display = 'block';
      }
    }
  
    // Close the Terms & Privacy modal
    closeTermsModal() {
      const modal = document.getElementById('termsModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
}
