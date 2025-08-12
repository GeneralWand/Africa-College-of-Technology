import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://your-api-url.com/send-email';

  constructor(private http: HttpClient) { }

  sendCredentials(email: string, credentials: { username: string, password: string }): Observable<any> {
    // In a real app, this would be an HTTP POST
    console.log(`Sending credentials to ${email}`, credentials);
    return of({ success: true }).pipe(delay(1000));
  }
}