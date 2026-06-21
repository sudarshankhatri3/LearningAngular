import { Routes } from '@angular/router';
import { Register } from './public/pages/common/register/register';
import { Login } from './public/pages/common/login/login';
import { LandingPage } from './public/pages/landing-page/landing-page';

export const routes: Routes = [
    {
        path:'',
        component:LandingPage
    },

    {
        path:'register',
        component:Register
    },
    {
        path:'login',
        component:Login
    }
];
