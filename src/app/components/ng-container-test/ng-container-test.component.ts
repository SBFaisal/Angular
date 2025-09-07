import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component,  inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container-test.component.html',
  styleUrl: './ng-container-test.component.css'
})
export class NgContainerTestComponent {

  httpClient = inject(HttpClient);

  userList: any[] = [];
  isApiRunning: boolean = false;
  loadUserData(){
    this.isApiRunning = true;
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList = res;
      this.isApiRunning = false;
    })
  }
}
