import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() btnClick = new EventEmitter<any>();

  onClick(str: string) {
    this.btnClick.emit(str);
  }
}
