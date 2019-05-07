import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postFirst: Post = new Post('Mon premier post', 'Content de premier post', 0);
  postSecond: Post = new Post('Mon deuxième post', 'Content du deuxième post', 0 );
  postThird: Post = new Post('Encore un post', 'Content de encore un post post', 0 );

  constructor() {
  }

  posts = [this.postFirst, this.postSecond, this.postThird];
}
