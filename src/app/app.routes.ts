import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'**',
        loadComponent:()=>import('./portfolio-page/portfolio-page').then(m=>m.PortfolioPage)
    }
];
