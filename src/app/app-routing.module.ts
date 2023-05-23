import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  // Ứng dụng phía máy chủ: (admin)
  // {
  //   path: 'admin',
  //   component: LayoutAdminComponent,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'products', component: ProductComponent },
  //   ],
  // },

  // // ứng dụng phía khách:
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     { path: 'home', component: HomeComponent },
  //     {
  //       path: 'login',
  //       component: LoginComponent,
  //     },
  //     { path: 'register', component: RegisterComponent },
  //   ],
  // },

  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
  
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
