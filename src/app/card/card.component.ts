import {Component, Input, OnInit} from '@angular/core';
import {Flashcard} from '../flashcard';
import { CARDS } from '../mock-cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

    public answerHidden = true;
    @Input() card;


  constructor() { }

  showAnswer() {
    this.answerHidden = false;
  }

  hideAnswer() {
    this.answerHidden = true;
  }

  ngOnInit() {
  }

}
