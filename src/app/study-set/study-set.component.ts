import { Component, OnInit } from '@angular/core';
import { CARDS} from '../mock-cards';
import {ActivatedRoute, Router} from '@angular/router';
import { STUDYSET} from '../mock-study-set';

@Component({
  selector: 'app-study-set',
  templateUrl: './study-set.component.html',
  styleUrls: ['./study-set.component.css']
})
export class StudySetComponent implements OnInit {
    public card: any [] = [];
    public allCards: any [] = CARDS;
    public studySetId: number;
    public studySets = STUDYSET;

  constructor(public route: ActivatedRoute) {
  }

  getCards() {
    for (const card of this.allCards) {
        if (card.studySetId == this.studySetId) {
            this.card.push(card);
            console.log(card);
        }
    }
  }

  ngOnInit() {
      this.studySetId = this.route.snapshot.params.id;
      this.getCards();
      this.studySets = STUDYSET;
  }

}
