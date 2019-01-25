import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstProductPage } from './first-product';

@NgModule({
  declarations: [
    FirstProductPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstProductPage),
  ],
})
export class FirstProductPageModule {}
