import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IssueDetailsComponent } from './components/issues/issue-details/issue-details.component';
import { IssuesComponent } from './components/issues/issues.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'issues',
    component: IssuesComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'details/:id',
    component: IssuesComponent
  },
  {
    path: 'issue-details',
    component: IssueDetailsComponent
  },
  { path: 'products', 
    component: ProductComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
