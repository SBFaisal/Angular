import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  studentList: any = [
    {id: 11, name:'AAA', city:'Pune', isActive:true},
    {id: 22, name:'BBB', city:'Goa', isActive:false},
    {id: 33, name:'CCC', city:'Salem', isActive:true}
  ]
  states: string[] = ['UP', 'MP', 'UK', 'Goa'];
}
