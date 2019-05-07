import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostlistitemComponent implements OnInit {

  @Input() posts: Post;

  constructor() { }
  ngOnInit() { }

  onLoveIt(i: number, loveIts: number) {
    this.posts[i].loveIts = loveIts + 1;
  }
  onDontLoveIt(i: number, loveIts: number) {
    this.posts[i].loveIts = loveIts - 1;
  }

}
