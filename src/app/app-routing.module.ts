import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { DetailpageComponent } from './pages/detailpage/detailpage.component';

const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'product/:id', component: DetailpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
