import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {

  div1BgColor: string = 'bg-primary';
  isDiv2Active: boolean = false;
  num1: string = ''
  num2: string = ''
  isCheckBoxChecked = false;
  selectedOption: string = ''

  studentList: any = [
    {id: 11, toltalMarks: 25,name:'AAA', city:'Pune', isActive:true},
    {id: 22, toltalMarks: 50,name:'BBB', city:'Goa', isActive:false},
    {id: 33, toltalMarks: 75,name:'CCC', city:'Salem', isActive:true},
    {id: 33, toltalMarks: 100,name:'DDD', city:'Delhi', isActive:false},
  ]

  customStyle : any = {
    'background-color':'red',
    'color': 'white',
    'height': '200px',
    'width': '200px',
    'border-radius': '50%'

  }

  changeColor(){
    this.isDiv2Active = !this.isDiv2Active;
  }

  red()
  {
    this.div1BgColor = 'bg-danger';
  }
  blue()
  {
    this.div1BgColor = 'bg-primary';
  }
}
