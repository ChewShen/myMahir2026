import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Calculator } from './pages/calculator/calculator';

export const routes: Routes = [
    {
        path:"",
        redirectTo:'home',
        pathMatch:'full',
    },
    {
        path:'home',
        component:Homepage
    },
    {
        path:'calculator',
        component:Calculator
    }
];
