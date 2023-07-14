import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
