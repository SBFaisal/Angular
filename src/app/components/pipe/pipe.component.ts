import { AsyncPipe, DatePipe, JsonPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, map } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [AsyncPipe,NaPipe,JsonPipe,DatePipe,TitleCasePipe,UpperCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  constructor() {
      this.currentTime = interval(1000).pipe(map(()=> new Date()));
   }

  name: string = 'UpperCase Pipe'
  title: string = 'this is title pipe'

  time: Date = new Date();

  currentTime: Observable<Date> = new Observable<Date>;

  details: any={
    name: 'angular',
    version: 18,
    isCovered: true
  }

  state: string = '';
}
