import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectivesComponent } from './components/Directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/Directives/attribute-directives/attribute-directives.component';
import { DatabindingComponent } from './components/databinding/databinding.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component: AddEmployeeComponent
    },
    {
        path:'data-binding',
        component: DatabindingComponent
    },
    {
        path:'structural-dir',
        component: StructuralDirectivesComponent
    },
    {
        path:'attribute-dir',
        component: AttributeDirectivesComponent
    }
];
