import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondProductPage } from './second-product';

@NgModule({
  declarations: [
    SecondProductPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondProductPage),
  ],
})
export class SecondProductPageModule {}
