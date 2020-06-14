import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
})
export class Tab1Page {

  
  constructor(private navegacao:NavController,public alertController:AlertController) {this.initializeApp(); }

  public title: string ="";
  pages: {url:string; direction: string; icon:string; text: string}[];

    ngOnInit() {
    }

    initializeApp() {
    
      this.pages= [
        { url: '../../../tab1', direction:'back', icon:'home', text:'Inicio'},
        { url: '../../../tab3', direction:'forward', icon:'analytics-outline', text:'Situação'},
        { url: '', direction:'forward', icon:'close-circle-outline', text:'Sair da conta'}
        
      ];
      
    }
   
  

  
    Sobre(){
      this.navegacao.navigateForward('sobre')
    }

    Sintomas(){
      this.navegacao.navigateForward('sintomas')
    }
    Transmissao(){
      this.navegacao.navigateForward('transmisao')
    }
    Prevencao(){
      this.navegacao.navigateForward('prevencao')
    }
    sair(){
      navigator['app'].exitApp();
    }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: ' Covid-19',
        subHeader: 'versão 1.0.0',
        message: ' <strong>API</strong>: https://covid19-brazil-api.now.sh/api/report/v1 <br> <br> Desenvolvido por <strong>Allan Oliveira</strong>',
        
        buttons: ['OK']
      });
  
      await alert.present();
    }
  
}