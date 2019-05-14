import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { postData } from '../assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-workshop';
  posts: Post[] = postData;
  isLoading = true;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  delete(index: number) {
    this.posts.splice(index, 1);
    console.log(this.posts);
  }
}
