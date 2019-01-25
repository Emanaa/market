import { DetailsPage } from './../details/details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';

/**
 * Generated class for the FirstProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-product',
  templateUrl: 'first-product.html',
})
export class FirstProductPage {
   public productType=this.navParams.get('param1');
   
  public items:any;
  public vegitemProduct:any;
  public fruitemProduct:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.getData();
    console.log(this.productType);
  }
  getData(){
    let url='https://5bcce576cf2e850013874767.mockapi.io/task/categories';
    let data:Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items=result;
      console.log(this.items);
      for(let item of this.items){

        if(item.id==1){
         this.vegitemProduct=item.products;
         console.log(item.products);
        }
        if(item.id==2){
          this.fruitemProduct=item.products;
          console.log(item.products);
         }

    }
    })
  }

 
  prev(){
    this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstProductPage');
  }

}
