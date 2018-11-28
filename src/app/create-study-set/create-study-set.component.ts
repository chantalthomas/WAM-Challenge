import { Component, OnInit } from '@angular/core';
import { createPost, updatePost, deletePost, createStudySet} from '../mutations';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-create-study-set',
  templateUrl: './create-study-set.component.html',
  styleUrls: ['./create-study-set.component.css']
})
export class CreateStudySetComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  createStudySet() {
      this.apollo.mutate({
        mutation: createStudySet,
        variables: {
            studySetInput: {
                title: 'Test Study Set',
                description: 'This is a test study set'
            }
        }
      }).pipe(map((data) => {
        return data.createStudySet;
      })).toPromise().then((response) => {
        console.log(response.id);
      }).catch((error) => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
