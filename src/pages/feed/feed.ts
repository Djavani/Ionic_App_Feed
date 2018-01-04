import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MoovieProvider } from './../../providers/moovie/moovie';
import { errorHandler } from '@angular/platform-browser/src/browser';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
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

  public lista_filmes = new Array<any>();

  public nomeUsuario : string = "Francinaldo Freitas";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
    ) {
  }
  
  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {    
    this.movieProvider.getLatestMovies().subscribe(
      data=> {
        const response = (data as any);
        this.lista_filmes = response.results;
        
      }, error => {
        console.log(error);
        
      }
    );
  }

}
