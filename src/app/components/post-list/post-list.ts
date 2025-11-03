import { Component } from '@angular/core';
import { JsonplaceholderServiceTs } from '../../services/jsonplaceholder-service.js';
import { Post } from '../../model/postInterface.js';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent {

  posts: Post[] = [];

  constructor(private oJsonplaceholderServiceTs: JsonplaceholderServiceTs) {
    
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.oJsonplaceholderServiceTs.getAllPosts().subscribe((posts: Post[]) => {
      console.log(posts);
      this.posts = posts;
    });
  }
}