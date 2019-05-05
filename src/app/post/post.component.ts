import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[];
  @Input() data: Post;
  @Input() index: number;
  @Output() delete = new EventEmitter<number>();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  loadPosts(post: Post): Post[] {
    return this.posts = this.postService.getPosts();
  }

  onDelete(postIndex: number) {
    this.delete.emit(postIndex);
  }

}
