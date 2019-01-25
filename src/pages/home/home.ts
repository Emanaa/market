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
  public data1;
  public data2;
  public itemProduct:any;
  imageArray:any=[];
  constructor(public navCtrl: NavController,public http:HttpClient) {
    this.imageArray=[{'image':'assets/imgs/7.jpg'},
     {'image':'assets/imgs/4.jpg'},
    {'image':'assets/imgs/5.jpg'},
     {'image':'assets/imgs/12.jpg'}, 
     {'image':'assets/imgs/10.jpg'},
    {'image':'assets/imgs/11.jpg'},
     {'image':'assets/imgs/3.jpg'},
    {'image':'assets/imgs/2.jpg'}];
   
      this.getData();
     
  }

  goToProduct1(){
    
      this.navCtrl.push(FirstProductPage,{
        param1: this.data1
    });
}


   
    
 
  goToProduct2(){
   
      this.navCtrl.push(SecondProductPage,{
        param2: this.data2
    });
  }

 getData(){
   let url='https://5bcce576cf2e850013874767.mockapi.io/task/categories';
   let data:Observable<any> = this.http.get(url);
   data.subscribe(result => {
     this.items=result;
     for(let item of this.items){
       if(item.id==2 || item.id==1)
       {
        this.data1=item.id;
       }
       if(item.id==4 || item.id==3)
       {
        this.data2=item.id;
       }
       
     }
     console.log(this.items);
     
   })
 }
}
