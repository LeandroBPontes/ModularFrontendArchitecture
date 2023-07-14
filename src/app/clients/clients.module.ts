import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './components/client/client.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';



@NgModule({
  declarations: [
    ClientComponent,
    ClientPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
