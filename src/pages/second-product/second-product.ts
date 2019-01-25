import { HomePage } from './../home/home';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second-product',
  templateUrl: 'second-product.html',
})
export class SecondProductPage {
  public productType2=this.navParams.get('param2');
   
  public items:any;
  public seaitemProduct:any;
  public meaitemProduct:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.getData();
    console.log(this.productType2);
  }
  getData(){
    let url='https://5bcce576cf2e850013874767.mockapi.io/task/categories';
    let data:Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items=result;
      console.log(this.items);
      for(let item of this.items){

        if(item.id==4){
         this.seaitemProduct=item.products;
         console.log(item.products);
        }
        if(item.id==3){
          this.meaitemProduct=item.products;
          console.log(item.products);
         }

    }
    })
  }
  prev(){
    this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad secondProductPage');
  }

}
