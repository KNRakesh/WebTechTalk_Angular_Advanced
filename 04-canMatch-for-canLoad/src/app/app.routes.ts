import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadGuard } from './load.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'user-dashboard',
    loadComponent: () =>
      import('./user-dashboard/user-dashboard.component').then(
        (m) => m.UserDashboardComponent
      ),
  },
  {
    path: 'admin-dashboard',
    loadComponent: () =>
      import('./admin-dashboard/admin-dashboard.component').then(
        (m) => m.AdminDashboardComponent
      ),
    canMatch: [loadGuard],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
