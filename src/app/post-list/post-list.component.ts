import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostlistComponent implements OnInit {
  @Input() posts: Post;
  constructor() { }
  ngOnInit() { }

}
