import {Routes} from '@angular/router';
import {CardComponent} from './card/card.component';
import {StudySetComponent} from './study-set/study-set.component';
import {CreateCardComponent} from './create-card/create-card.component';
import {CreateStudySetComponent} from './create-study-set/create-study-set.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

export const appRoutes: Routes = [
    {path: 'home', component: LandingPageComponent},
    {path: 'card', component: CardComponent},
    {path: 'create-card', component: CreateCardComponent},
    {path: 'study-set', component: StudySetComponent},
    {path: 'study-set/:id', component: StudySetComponent},
    {path: 'create-study-set', component: CreateStudySetComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
