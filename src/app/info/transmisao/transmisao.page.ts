import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-transmisao',
  templateUrl: './transmisao.page.html',
  styleUrls: ['./transmisao.page.scss'],
})
export class TransmisaoPage implements OnInit {

  voltar(){
    this.navegacao.navigateBack('app/tabs/tab1')
  }
  constructor(private navegacao:NavController) { }

  ngOnInit() {
  }

}
