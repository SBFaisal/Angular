import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(`${this.apiUrl}users`);
  }

  // We can create some custom methods apart from API calls.
}
