import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  studentObj: any = {
    firstName: '',
    LastName: '',
    userName: '',
    city: '',
    state: '',
    zipcode: '',
    isAccepted: false
  }

  details: any;
  onSubmit(){
    debugger;
    this.details = this.studentObj;
  }

  onReset(){
    this.studentObj = {
      firstName: '',
      LastName: '',
      userName: '',
      city: '',
      state: '',
      zipcode: '',
      isAccepted: false
    }
  }
}
