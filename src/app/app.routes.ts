import { Routes } from '@angular/router';
import { UsersRoutes } from './layout/pages/users/users.routing';

export const routes: Routes = [
       {
              path: '',
              loadComponent: () => import('./layout/layout/layout.component').then(c => c.LayoutComponent),
              children: UsersRoutes
       }
];
