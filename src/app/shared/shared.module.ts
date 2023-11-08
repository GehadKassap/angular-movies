import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
