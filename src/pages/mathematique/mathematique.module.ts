import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MathematiquePage } from './mathematique';

@NgModule({
  declarations: [
    MathematiquePage,
  ],
  imports: [
    IonicPageModule.forChild(MathematiquePage),
  ],
})
export class MathematiquePageModule {}
