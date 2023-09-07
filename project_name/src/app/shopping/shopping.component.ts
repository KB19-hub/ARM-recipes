import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  isLoggedIn: boolean = false;
  purchaseSuccess: boolean = false;
  purchaseMessage: string = ''; // Variable to hold the purchase success message

  constructor(private authService: AuthService, private http: HttpClient) { // Inject HttpClient here
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  // Function to handle the purchase action when the user clicks the "Buy" button.
  buyProduct(productName: string, price: number) {
    // Replace 'http://your-php-server/purchase.php' with the actual URL of your PHP server and purchase endpoint.
    const purchaseUrl = 'http://localhost/angular_api/purchase.php';
    
    // Replace 'userId' with the user ID or any identifier you use to identify the logged-in user.
    const userId = 'userId';
    
    // Create a request body with the selected product details and the user ID.
    const requestBody = { productName: productName, price: price, userId: userId };
  
    // Send the HTTP POST request to the PHP endpoint.
    this.http.post<any>(purchaseUrl, requestBody).subscribe(
      (response: any) => { // Add type annotation to response parameter
        console.log(`Purchase successful: ${productName} for $${price}`);
        this.purchaseSuccess = true;
        this.purchaseMessage = `Purchase of ${productName} for $${price} successful!`;
      },
      (error: any) => { // Add type annotation to error parameter
        console.error('Purchase failed:', error);
        this.purchaseSuccess = false;
        this.purchaseMessage = 'Purchase failed. Please try again later.';
      }
    );
  }
}
