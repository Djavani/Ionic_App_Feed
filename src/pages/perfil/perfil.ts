import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public objetoPerfil = {
    nome: "Francinaldo França",
    nascimento: "Janeiro 4, 1975",
    descricao: "Bora partir pra bagaceira negada!, só sangue no zoi e cartucheira engatilhada",
    cidadeNatal: "Rancho Abidoral"    
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
