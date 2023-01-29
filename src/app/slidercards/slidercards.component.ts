import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "app-slidercards",
  template: `
    <swiper [effect]="'cards'" [grabCursor]="true" class="mySwiper">
      <ng-template swiperSlide>Slide 1</ng-template
      ><ng-template swiperSlide>Slide 2</ng-template
      ><ng-template swiperSlide>Slide 3</ng-template
      ><ng-template swiperSlide>Slide 4</ng-template
      ><ng-template swiperSlide>Slide 5</ng-template
      ><ng-template swiperSlide>Slide 6</ng-template
      ><ng-template swiperSlide>Slide 7</ng-template
      ><ng-template swiperSlide>Slide 8</ng-template
      ><ng-template swiperSlide>Slide 9</ng-template>
    </swiper>
  `,
  styleUrls: ["./slidercards.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SlidercardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
