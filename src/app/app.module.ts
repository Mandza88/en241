import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Serial } from '@ionic-native/serial';
import { ClefOtgPage } from '../pages/clef-otg/clef-otg';
import { ClefOtgPageModule } from '../pages/clef-otg/clef-otg.module';
import { VideoPlayer } from '@ionic-native/video-player';
import { LoginPageModule } from '../pages/login/login.module';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { En241PageModule } from '../pages/en241/en241.module';
import { CourPageModule } from '../pages/cour/cour.module';
import { NousPageModule } from '../pages/nous/nous.module';
import { MathematiquePageModule } from '../pages/mathematique/mathematique.module';
import { FrancaisPageModule } from '../pages/francais/francais.module';
import { PhilosophiePageModule } from '../pages/philosophie/philosophie.module';
import { HomePageModule } from '../pages/home/home.module';
import { AnglaisPageModule } from '../pages/anglais/anglais.module';
import { MissionPageModule } from '../pages/mission/mission.module';
import { ClassePageModule } from '../pages/classe/classe.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AuthProvider } from '../providers/auth/auth';

//AF2 Settings

export const config = {
  apiKey: "AIzaSyDbPWa18BvHiEEXdwUK5YiVP5UoA17aDD8",
    authDomain: "ogarlink-505ba.firebaseapp.com",
    databaseURL: "https://ogarlink-505ba.firebaseio.com",
    projectId: "ogarlink-505ba",
    storageBucket: "",
    messagingSenderId: "473989065889"
};
@NgModule({
  declarations: [
    MyApp,
    ListPage,
   
  ],
  imports: [
    BrowserModule,
    ClefOtgPageModule,
    LoginPageModule,
    ResetPasswordPageModule,
    En241PageModule,
    CourPageModule,
    NousPageModule,
    MathematiquePageModule,
    FrancaisPageModule,
    PhilosophiePageModule,
    AnglaisPageModule,
    MissionPageModule,
    HomePageModule,
    ClassePageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Serial,
    VideoPlayer,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
