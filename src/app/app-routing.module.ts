import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { DetailproductComponent } from './pages/detailproduct/detailproduct.component';


const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'product/:id', component: DetailproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
