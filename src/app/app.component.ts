import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  // pages: {url:string; direction: string; icon:string; text: string}[];
  

  initializeApp() {
    
    // this.pages= [
    //   { url: 'app/tabs/tab1', direction:'back', icon:'home', text:'info'},
    //   { url: 'app/tabs/tab2', direction:'forward', icon:'add', text:'situação'}
    // ];
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
