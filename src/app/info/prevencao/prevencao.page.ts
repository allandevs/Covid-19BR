import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-prevencao',
  templateUrl: './prevencao.page.html',
  styleUrls: ['./prevencao.page.scss'],
})
export class PrevencaoPage implements OnInit {

  constructor(private navegacao:NavController) { }

  ngOnInit() {
  }
  voltar(){
    this.navegacao.navigateBack('app/tabs/tab1')
  }
}
