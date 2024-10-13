import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { StructuralDirectivesComponent } from './components/Directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/Directives/attribute-directives/attribute-directives.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { IfElseComponent } from './components/controlflow/if-else/if-else.component';
import { ForComponent } from './components/controlflow/for/for.component';
import { SwitchComponent } from './components/controlflow/switch/switch.component';
import { PipeComponent } from './components/pipe/pipe.component';

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
    },
    {
        path:'if-else',
        component: IfElseComponent
    },
    {
        path:'for',
        component: ForComponent
    },
    {
        path:'switch',
        component: SwitchComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    }
];
