import { Component, OnInit } from '@angular/core';
import {Flashcard} from '../flashcard';
import { StudySet} from '../studySet';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

    card: Flashcard = {
        question: 'Tal',
        answer: 'Tal',
        studySetId: 4
    };

  constructor() { }

  ngOnInit() {
  }

}
