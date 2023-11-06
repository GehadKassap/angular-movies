import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { WishListComponent } from './wish-list/wish-list.component';



@NgModule({
  declarations: [
    ProfileComponent,
    WishListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
