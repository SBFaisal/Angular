import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralDirectivesComponent } from './components/Directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/Directives/attribute-directives/attribute-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearnAng';
}
