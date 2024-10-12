import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  isDiv1Visible: boolean = false;
  isDiv2Visible: boolean = false;
  selectedOption: string = '';
  studentList: any = [
    {id: 11, name:'AAA', city:'Pune', isActive:true},
    {id: 22, name:'BBB', city:'Goa', isActive:false},
    {id: 33, name:'CCC', city:'Salem', isActive:false}
  ]

  num1: string = '';
  num2: string = '';

  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }

  changesDiv2State(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }

  states: string[] = ['UP', 'MP', 'UK', 'Goa'];
  
}
