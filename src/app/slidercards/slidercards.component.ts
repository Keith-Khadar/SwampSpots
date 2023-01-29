import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "app-slidercards",
  templateUrl: "./slidercards.component.html",
  styleUrls: ["./slidercards.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SlidercardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  titles = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6", "Card 7", "Card 8", "Card 9", "Card10"];
  captions = ["This is a courtyard", "These tables are pretty cool","Look at this cool graffiti tunnel", "This is a nice place to sit and read","Look at this amazing scenery", "Look at this courtyard", "need information?", "Nice place to sit and enjoy the view", "need housing?", "look at all these parking spaces", "" ]

}
