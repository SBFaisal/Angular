import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-view-child-demo',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-child-demo.component.html',
  styleUrl: './view-child-demo.component.css'
})
export class ViewChildDemoComponent implements AfterViewInit {

  // html element
  @ViewChild('txtBox') txtInput?: ElementRef;
  // custom component- rendering the component in html is must
  @ViewChild(AlertComponent) alertComp?: AlertComponent;

  text: string = '';
  ngAfterViewInit(): void {
    this.text = this.txtInput?.nativeElement.value;

    this.alertComp?.alertMessage;
    debugger
  }
}
