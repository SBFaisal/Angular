import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {


  studentObj: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(""),
    userName: new FormControl("some@123", [Validators.email]),
    city: new FormControl(""),
    state: new FormControl(""),
    zipcode: new FormControl(""),
    isAccepted: new FormControl("")
  });

  details: any;
  onSave(){
    debugger;
    this.details = this.studentObj.value;
  }

  onReset(){
    
  }
}
