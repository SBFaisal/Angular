import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;
  selectedOption: string = '';
  num1: string = '';
  num2: string = '';
  isChecked: boolean = false;
  

  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }

  changesDiv2State(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }

 
}
