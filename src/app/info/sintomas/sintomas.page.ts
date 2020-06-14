import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})
export class SintomasPage implements OnInit {

  constructor(private navegacao:NavController) { }

  ngOnInit() {
  }
  voltar(){
    this.navegacao.navigateBack('app/tabs/tab1')
  }


}
