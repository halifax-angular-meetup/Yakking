import { Injectable } from '@angular/core';
import { posts } from '../../assets/data';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Post[] {
    return posts;
  }
}
