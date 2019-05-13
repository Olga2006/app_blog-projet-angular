import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BlogService } from '../services/blog.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostlistComponent implements OnInit, OnDestroy  {
  posts: any[];
  postSubscription: Subscription;

  constructor(private blogService: BlogService) {
  }

  onSave() {
    this.blogService.savePostsToServer();
  }

  onFetch() {
    this.blogService.getPostsFromServer();
  }

  ngOnInit() {
    this.postSubscription = this.blogService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.blogService.emitPostSubject();
  }


  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
