import { Component, OnInit, ViewChild } from '@angular/core';
import PostsService from '@services/posts.service';
import { of } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';


declare var $: any;
@Component({
  selector: 'app-permission-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.scss']
})
export default class ListPostsComponent implements OnInit {

  res = {
    posts: []
  };

  list = {
    posts: [],
  };

  constructor(private postS: PostsService) { }

  ngOnInit() {
    console.log('_______ngOnInit');
    of(0).pipe(
      flatMap(this.fetchPosts.bind(this)),
      tap(this.handleFetchPosts.bind(this))
    ).subscribe();
  }

  onPostComments(post) {
    window.open(`/post/${post.id}`, '_blank');
    console.log('_______onPostComments', post);
  }

  fetchPosts() {
    console.log('_______fetchPosts');

    return this.postS.getPostsList();
  }

  handleFetchPosts(response) {
    console.log('handleFetchPosts', response);
    this.list.posts = response;
  }
}

export { ListPostsComponent };
