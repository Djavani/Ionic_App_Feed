import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { MoovieProvider } from './../../providers/moovie/moovie';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { FilmeDetalhesPage } from './../filme-detalhes/filme-detalhes';

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

  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public lista_filmes = new Array<any>();
  public infiniteScroll;
  public page = 1;

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando lista de filmes..."
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }
  public nomeUsuario: string = "Francinaldo Freitas";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme) {    
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id })
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);    
  }

  carregarFilmes(newPage: boolean = false) {
    this.abreCarregando();

    this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        
        if(newPage) {                  
          this.lista_filmes = this.lista_filmes.concat(response.results);
          this.infiniteScroll.complete();
        }else {
          this.lista_filmes = response.results;
        }

        this.fechaCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        this.fechaCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    );
  }

  
}
