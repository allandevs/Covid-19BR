import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import {Covid19Service} from '../apiCovid/covid19.service';
import {LoadingController } from '@ionic/angular';
import { Covid19BrasilService } from '../apiCovid/covid19-brasil.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers:[Covid19Service,Covid19BrasilService]
  
})
export class Tab3Page {

  constructor(private navegacao:NavController, public Covid19Service:Covid19Service, public Covid19BrasilService:Covid19BrasilService, public loadingController: LoadingController) { }
  public lista_covid = new Array<any>();
  public lista_covidBrasil = new Array<any>();

   buscar(ev: any){
    
    const val = ev.target.value;
    // this.recuperar()
    if(val && val.trim() != ''){
      this.lista_covid = this.lista_covid.filter((covid) =>{
        return (covid.uf.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      }

    }
  atualiza(){
    this.recuperar()
  }

  atualiza2(){
    this.recuperar()
  }
  async efeitoLoading(){
    const loading = await this.loadingController.create({
      message: 'Carregando Informações',
      duration: 1200,
      spinner:"lines"
    });
    await loading.present();
    
  }


  
  ionViewDidEnter() {
    this.efeitoLoading();
    this.recuperar();
    this.recuperarTotalBrasil();
    
  
  }
  

  
 
    ngOnInit() {
      
    }
   
    efeitoRefresh(event) {
      this.recuperar()
       console.log('Begin async operation');
    
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
    recuperar(){
      
      this.Covid19Service.getCovid().subscribe(
        data => {
          const response = (data as any);
          
          this.lista_covid = response.data;
          console.log(this.lista_covid.toLocaleString());
        },
        error=>{
    
        }
      )
    }

    recuperarTotalBrasil(){
      
      this.Covid19BrasilService.getCovidBrasil().subscribe(
        data=> {
          const responseB = (data as any);
          this.lista_covidBrasil = responseB.data;
          console.log(this.lista_covidBrasil.toLocaleString());
        },
        error=>{
    
        }
      )
    }
   
  
   
  }