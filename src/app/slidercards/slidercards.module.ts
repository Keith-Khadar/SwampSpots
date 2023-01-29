import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidercardsComponent } from './slidercards.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [SlidercardsComponent],
  imports: [
    CommonModule, SwiperModule, IonicModule
  ],
  exports:[SlidercardsComponent]
})
export class SlidercardsModule { }
