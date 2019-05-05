import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-workshop';
  posts: Post[];

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  onDelete(postIndex: number) {
    this.posts.splice(postIndex, 1);
    console.log(this.posts);
  }
}

// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { PostService } from "../services/post.service";

// @Component({
//   selector: 'parent-component',
//   templateUrl: './parent.component.html',
//   styleUrls: ['./parent.component.css']
// })

// export class ParentComponent {
//   posts: Post[];

//   constructor(private postService: PostService) {
//     this.posts = this.postService.getPosts();
//   }
//   onDelete(postIndex: string) {
//     this.posts.splice(postIndex, 1);
//   }
// }

// <div *ngFor="let post of posts; index as i">
//   <post-component data="post" (onDelete)="onDelete(i)"></post-component>
// </div>
