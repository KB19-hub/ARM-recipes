import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost/angular_api/submit_review.php'; // Replace this with the correct URL for your PHP script

  constructor(private http: HttpClient) { }

  submitReview(userName: string, review: string) {
    // Create a FormData object to send the data as key-value pairs
    const formData = new FormData();
    formData.append('user-name', userName);
    formData.append('user-review', review);

    // Make the HTTP POST request to the PHP script
    return this.http.post(this.apiUrl, formData);
  }
}
