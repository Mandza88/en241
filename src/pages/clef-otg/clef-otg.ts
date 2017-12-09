import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
/**
 * Generated class for the ClefOtgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clef-otg',
  templateUrl: 'clef-otg.html',
})
export class ClefOtgPage {

  constructor(private videoPlayer: VideoPlayer,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // Playing a video.
this.videoPlayer.play('file:///android_asset/www/01-compond-words.mp4').then(() => {
  console.log('video completed');
 }).catch(err => {
  console.log(err);
 });
  }

}
