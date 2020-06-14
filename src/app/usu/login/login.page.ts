import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';
import { Router } from '@angular/router';
 import { ToastController, LoadingController } from '@ionic/angular';
 import { NavController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

public email:string="";
public senha:string="";
public mensagem:string="";

acesso(){
  this.efeitoLoading()
  this.loginUsuario()
}

async efeitoLoading(){
  const loading = await this.loadingController.create({
    message: 'Carregando...',
    duration: 1500,
    spinner:"lines"
  });
  await loading.present();
  const {role, data} = await loading.onDidDismiss();
}

loginUsuario(){
  this.autenticacaoService.loginNoFirebase(this.email, this.senha).then((res) =>{this.navegacao.navigateForward('app/tabs/tab1');
  
  }).catch((error)=>{
    this.mensagem = "Erro ao tentar Logar";
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

cadastrar(){
  this.navegacao.navigateForward('inserir')
}
  constructor(public autenticacaoService: AutenticacaoService,
    public router:Router,
    public toastController: ToastController, private navegacao:NavController, public loadingController: LoadingController) { }

  

  ngOnInit() {
  }

}
