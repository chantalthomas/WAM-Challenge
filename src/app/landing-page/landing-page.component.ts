import { Component, OnInit } from '@angular/core';
import { StudySet} from '../studySet';
import { STUDYSET} from '../mock-study-set';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public studySets = STUDYSET;
  constructor() { }

  ngOnInit() {
    this.studySets = STUDYSET;
    console.log(this.studySets);
  }

}
