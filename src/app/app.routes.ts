import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { StructuralDirectivesComponent } from './components/Directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/Directives/attribute-directives/attribute-directives.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { IfElseComponent } from './components/controlflow/if-else/if-else.component';
import { ForComponent } from './components/controlflow/for/for.component';
import { SwitchComponent } from './components/controlflow/switch/switch.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormComponent } from './components/Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/Forms/reactive-form/reactive-form.component';
import { APIHttpClientComponent } from './components/apihttp-client/apihttp-client.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContainerTestComponent } from './components/ng-container-test/ng-container-test.component';
import { ViewChildDemoComponent } from './components/decorators/view-child-demo/view-child-demo.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'add-emp',
                component: AddEmployeeComponent
            },
            {
                path: 'data-binding',
                component: DatabindingComponent
            },
            {
                path: 'structural-dir',
                component: StructuralDirectivesComponent
            },
            {
                path: 'attribute-dir',
                component: AttributeDirectivesComponent
            },
            {
                path: 'if-else',
                component: IfElseComponent
            },
            {
                path: 'for',
                component: ForComponent
            },
            {
                path: 'switch',
                component: SwitchComponent
            },
            {
                path: 'pipe',
                component: PipeComponent
            },
            {
                path: 'template-form',
                component: TemplateFormComponent
            },
            {
                path: 'reactive-form',
                component: ReactiveFormComponent
            },
            {
                path: 'API-HttpClient',
                component: APIHttpClientComponent
            },
            {
                path: 'ng-template',
                component: NgTemplateComponent
            },
            {
                path: 'ng-container',
                component: NgContainerTestComponent
            },
            {
                path: 'view-child',
                component: ViewChildDemoComponent
            }
        ]
    },

];
