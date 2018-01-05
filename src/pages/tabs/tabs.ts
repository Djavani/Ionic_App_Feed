

import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { ConfiguracoesPage } from './../configuracoes/configuracoes';
import { SobrePage } from './../sobre/sobre';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage;
  tab5Root = ConfiguracoesPage
  tab6Root = SobrePage

  constructor() {

  }
}
