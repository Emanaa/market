import { HomePage } from './../home/home';
import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides  } from 'ionic-angular';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nextPage(){
    this.navCtrl.push(HomePage);
  }
  HomePage(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {

    
  }

}
