import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastController,LoadingController } from  '@ionic/angular';
import { AutenticacaoService} from 'src/app/usuario/autenticacao.service';
import { NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.page.html',
  styleUrls: ['./inserir.page.scss'],
})
export class InserirPage implements OnInit {

  constructor(public autenticacaoService: AutenticacaoService,
    public router:Router,
    public toastController: ToastController, private navegacao:NavController,public alertController: AlertController,public loadingController: LoadingController) { }
  
  ngOnInit() {
  }
 
public email:string="";
public senha:string="";
public mensagem:string="";


voltar(){
  this.navegacao.navigateBack('')
}

insereUser(){
  this.insereUsuario()
  this.efeitoLoading()
}
async efeitoLoading(){
  const loading = await this.loadingController.create({
    message: 'Aguarde..',
    duration: 1500,
    spinner:"lines"
  });
  await loading.present();
  const {role, data} = await loading.onDidDismiss();
}

insereUsuario(){
 this.autenticacaoService.insereNofireBase(this.email, this.senha).then((res) =>{this.navegacao.navigateForward('app/tabs/tab1');

  this.presentAlert();

    
  }).catch((error)=>{
    this.mensagem = "Erro ao incluir usuario";
    this.exibeMensagem();
  })
}

async exibeMensagem(){
  const toast = await this.toastController.create({
    message: this.mensagem,
    duration: 2000
  });
  toast.present();
}
 
async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'App Covid-19',
    subHeader: 'Bem-vindo(a)',
    message: 'Parabéns Pelo cadastro :)',
    buttons: ['OK']
  });

  await alert.present();
}

}
