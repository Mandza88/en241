import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ClefOtgPage } from '../pages/clef-otg/clef-otg';
import { LoginPage } from '../pages/login/login';
import { FrancaisPage } from '../pages/francais/francais';
import { MathematiquePage } from '../pages/mathematique/mathematique';
import { PhilosophiePage } from '../pages/philosophie/philosophie';
import { AnglaisPage } from '../pages/anglais/anglais';
import { CourPage } from '../pages/cour/cour';
import { En241Page } from '../pages/en241/en241';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{color:string,icon:string,title: string, component: any}>;
  contacts: Array<{color:string,icon:string,title: string, component: any}>;
  constructor(afAuth: AngularFireAuth,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    const authObserver = afAuth.authState.subscribe( user => {
      if (user) {
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      } else {
        this.rootPage = LoginPage;
        authObserver.unsubscribe();
      }
    });
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { color:'secondary',icon:'home',title: 'Acceuil', component: HomePage },
      { color:'sun',icon:'user-circle-o',title: 'Mon compte', component: LoginPage },
      { color:'primary',icon:'text-width',title: 'Francais', component: FrancaisPage },
      { color:'danger',icon:'superscript',title: 'Mathematique', component: MathematiquePage },
      { color:'sun',icon:'table',title: 'Philosophie', component: PhilosophiePage },
      { color:'foret',icon:'language',title: 'Anglais', component: AnglaisPage },
      { color:'citron',icon:'globe',title: 'cour', component: CourPage },
      { color:'fleur',icon:'language',title: 'Espagnole', component: ListPage },
      { color:'secondary',icon:'hourglass-end',title: 'Histoire', component: CourPage },
      { color:'pepsy',icon:'id-badge',title: 'Education Civique', component: En241Page },
  
    ];

    // used for an example of ngFor and navigation
    this.contacts = [
      { color:'light',icon:'',title: 'informations generales', component: HomePage },
      { color:'danger',icon:'volume-control-phone',title: 'comment ça marche?', component: HomePage },
      { color:'secondary',icon:'ravelry',title: 'EN241', component: En241Page },
      { color:'citron',icon:'bell',title: 'Contact', component: ListPage },
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
