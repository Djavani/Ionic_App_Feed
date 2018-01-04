import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Francinaldo França",
    data: "Janeiro 4, 2018",
    descricao: "Bora partir pra bagaceira negada!, só sangue no zoi e cartucheira engatilhada",
    qtd_likes: 12,
    qtd_comments: 4,
    time_comment: "8h ago"
  }

  public nomeUsuario : string = "Francinaldo Freitas";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(5, 10);
  }

}
