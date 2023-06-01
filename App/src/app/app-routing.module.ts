import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplaySingleProductComponent } from './products/display_single_product/display_single_product.component';

const routes: Routes = [
  { 
    path: 'home',
    component: AppComponent 
  },
  { 
    path: 'product',
    component: DisplaySingleProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
