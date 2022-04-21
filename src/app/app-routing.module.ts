import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/signin/sign-in.module').then(m => m.SignInModule)    
  },
  {
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)    
  },

  {
    path: 'plans',
    loadChildren: () => import('./pages/plans/plans.module').then(m => m.PlansModule)    
    },
  
  {
    path: '**',
    redirectTo : 'home',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
