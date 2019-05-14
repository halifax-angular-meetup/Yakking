import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  markAsFavorite() {
    this.post.likes = this.post.likes + 1;
  }

  onDelete(postIndex: number) {
    this.delete.emit(postIndex);
  }

}
