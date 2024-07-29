import { Routes, RouterModule } from '@angular/router';

export const UsersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./users.component').then(c => c.UsersComponent),
      },
      {
        path: 'view/:id',
        loadComponent: () => import('./view-user/view-user.component').then(c => c.ViewUserComponent),
      },
      {
        path: 'add',
        loadComponent: () => import('./add-edit-user/add-edit-user.component').then(c => c.AddEditUserComponent),
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./add-edit-user/add-edit-user.component').then(c => c.AddEditUserComponent),
      }
    ]
  }
];


