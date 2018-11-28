import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { StudySetComponent } from './study-set/study-set.component';
import {appRoutes} from './routes';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { CreateStudySetComponent } from './create-study-set/create-study-set.component';
import { DeleteStudySetComponent } from './delete-study-set/delete-study-set.component';
import { DeleteCardComponent } from './delete-card/delete-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StudySetComponent,
    NavigationComponent,
    CreateCardComponent,
    CreateStudySetComponent,
    DeleteStudySetComponent,
    DeleteCardComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
    providers: [{
        provide: APOLLO_OPTIONS,
        useFactory(httpLink: HttpLink) {
            return {
                cache: new InMemoryCache(),
                link: httpLink.create({
                    uri: "https://localhost:3000/graphql"
                })
            }
        },
        deps: [HttpLink]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
