import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';


@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [
    MoovieProvider
  ]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeId;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MoovieProvider
  ) {
  }

  ionViewDidEnter() {
    this.filmeId = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeId).subscribe(
      data => {
        console.log(data);        
        this.filme = data;
      }, error => {
        console.log(error);
        
      })
  }

}
