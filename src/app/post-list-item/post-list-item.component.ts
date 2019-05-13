import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostlistitemComponent implements OnInit {
  @Input() post: Post;
  @Input() indexOfPost: number;


  constructor(private blogService: BlogService) { }
  ngOnInit() { }

  onLoveIt() {
    this.blogService.loveItOne(this.indexOfPost);
  }
  onDontLoveIt() {
    this.blogService.dontLoveItOne(this.indexOfPost);
  }

  onDelPost() {
    this.blogService.delPostOne(this.indexOfPost);
  }

}
