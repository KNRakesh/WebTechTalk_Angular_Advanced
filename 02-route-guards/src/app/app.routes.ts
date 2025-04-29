import { OffersComponent } from './offers/offers.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { AuthGuard } from './services/auth.guard';
// import { authGuard } from './services/auth.guard';
import { roleGuard } from './services/role.guard';
// import { notCompleteGuard } from './services/not-complete.guard';
import { NotCompleteGuard } from './services/not-complete.guard';
import { modulesGuard } from './services/modules.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [roleGuard],
    children: [
      { path: 'edit', component: EditAboutComponent },
    ],
  },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent, canDeactivate: [NotCompleteGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: 'offers',
    canMatch: [modulesGuard],
    loadComponent: () =>
      import('./offers/offers.component').then(() => OffersComponent),
  },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent },
];
