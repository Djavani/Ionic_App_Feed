import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
  providers: [
    Camera
  ]
})
export class SobrePage {

  foto = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera
  ) {
  }

  ionViewDidLoad() {
    
  }

  tirarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {     
    });
  }

}
