import { Component, input, signal, Signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
    courseName: string = "Angular";
    state: string = "UP";
    rollNumber: number = 123;
    isIndian: boolean = true;
    inputType = "checkbox";
    myClassName = "bg-danger";
    currentDate: Date = new Date();
    fullName = signal('ABC XYZ');


    changeCouseName()
    {
      this.courseName = 'TypeScript';
      this.fullName.set('Faisal ABC');
    }

    showMessage(message: string)
    {
      alert(message);
    }

}
