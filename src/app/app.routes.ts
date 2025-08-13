import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { RegisterComponent } from './register-component/register-component';
import { TemplateForm } from './template-form/template-form';
import { ReactiveForm } from './reactive-form/reactive-form';
import { DecForm } from './dec-form/dec-form';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    }
    ,
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'dform',
        component:DecForm
    }
];
