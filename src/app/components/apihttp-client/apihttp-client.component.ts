import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apihttp-client',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './apihttp-client.component.html',
  styleUrl: './apihttp-client.component.css'
})
export class APIHttpClientComponent implements OnInit {
  ngOnInit(): void {
    this.fetchData();
  }
  constructor(private http: HttpClient) { }



  // Get API
  data: any[] = [];
  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((d:any) => {
        this.data = d;
      },
        error => {
          console.error('Error fetching data:', error);
        }
      )
  }

  // Post API
  postData: any = 
  {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
  postAPIResponseData: any;
  sendData() {
  this.http.post('https://jsonplaceholder.typicode.com/users', this.postData)
    .subscribe((res:any) => {
      this.postAPIResponseData = res;
    },
      err => {
        alert(err.message);
      }
    )
  }
}
