import { Routes,RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
export const AppRoutes: Routes = [
  

  {
    path: 'login',
    component:LoginComponent
  },{
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  
  {
    path: '**',
    redirectTo: 'login'
  }
]
export const appRoutingModule = RouterModule.forRoot(AppRoutes);
