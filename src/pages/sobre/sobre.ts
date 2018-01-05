import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
  providers: [
    Camera,
    BarcodeScanner
  ]
})
export class SobrePage {

  foto = "";
  barcodeText = ""
  barcodeFormat = ""

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner
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

  lerCodigoBarras() {
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here      
      this.barcodeText = barcodeData.text;
      this.barcodeFormat = barcodeData.format;
      
     }, (err) => {
         // An error occurred
         console.log(err);
         
     });
  }

}
