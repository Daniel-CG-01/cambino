import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/postInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderServiceTs {
  
  constructor(private oHTTPClient: HttpClient) {
    
  }

  getAllPosts():Observable<Post[]> {
    return this.oHTTPClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  // getAllPosts():Observable<Post[]> {
  //   return this.oHTTPClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  // }
}