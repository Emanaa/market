import { FirstProductPage } from './../first-product/first-product';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SecondProductPage } from '../second-product/second-product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items:any;
  imageArray:any=[];
  constructor(public navCtrl: NavController,public http:HttpClient) {
    this.imageArray=[{'image':'assets/imgs/7.jpg'},
     {'image':'assets/imgs/4.jpg'},
    {'image':'assets/imgs/5.jpg'},
     {'image':'assets/imgs/12.jpg'},
    {'image':'assets/imgs/8.jpg'}, 
     {'image':'assets/imgs/10.jpg'},
    {'image':'assets/imgs/11.jpg'},
     {'image':'assets/imgs/3.jpg'},
    {'image':'assets/imgs/2.jpg'}];
   
      this.getData();
     
  }

  goToProduct1(){
    
      this.navCtrl.push(FirstProductPage);
}


   
    
 
  goToProduct2(){
   
      this.navCtrl.push(SecondProductPage);
  }

 getData(){
   let url='https://5bcce576cf2e850013874767.mockapi.io/task/categories';
   let data:Observable<any> = this.http.get(url);
   data.subscribe(result => {
     this.items=result;
     console.log(this.items);
   })
 }
}
