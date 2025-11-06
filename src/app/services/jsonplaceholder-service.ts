import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/postInterface';
import { User } from '../model/userInterface';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  
  constructor(private oHTTPClient: HttpClient) {
    
  }

  getAllPosts(): Observable<Post[]> {
    return this.oHTTPClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getUser(id: number): Observable<User> {
    return this.oHTTPClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.oHTTPClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}