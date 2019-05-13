import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlogService {

  postsSubject = new Subject<any[]>();

  private posts = this.getPostsFromServer();

  constructor(private httpClient: HttpClient) { }



  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  getPostById(id: number) {
    const post = this.posts.find(
      (s: Post) => {
        return s.id === id;
      }
    );
    return post;
  }



  loveItOne(indexOfPost: number) {
    this.posts[indexOfPost].loveIts = this.posts[indexOfPost].loveIts + 1;
    this.emitPostSubject();
    this.savePostsToServer();
  }

  dontLoveItOne(indexOfPost: number) {
    this.posts[indexOfPost].loveIts = this.posts[indexOfPost].loveIts - 1;
    this.emitPostSubject();
    this.savePostsToServer();
  }

  addPost(title: string, content: string) {
    const postObject = new Post(0, '', '', 0);
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;
    postObject.title = title;
    postObject.content = content;
    postObject.loveIts = 0;
    this.posts.push(postObject);
    this.emitPostSubject();
    this.savePostsToServer();
  }

  delPostOne(indexOfPost: number) {
    this.posts.splice(indexOfPost, 1);
    this.emitPostSubject();
    this.savePostsToServer();
  }

  savePostsToServer() {
    this.httpClient
      .put('https://blog-projet-angular.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getPostsFromServer() {
    this.httpClient
      .get<any[]>('https://blog-projet-angular.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostSubject();
        },
        (error) => {
          this.posts = [];
          console.log('Erreur ! : ' + error);

        }
      );
    return this.posts;

  }

}
