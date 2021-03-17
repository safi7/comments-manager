import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PostsService from '@services/posts.service';
import { of } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';
import _ from 'lodash';


declare var $: any;
@Component({
  selector: 'app-permission-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.scss']
})
export default class ListPostCommentsComponent implements OnInit {

  on = {
    postId: null,
    email: null,
    name: null,
    body: null,
  };

  res = {
    comments: []
  };

  list = {
    comments: [],
  };
  data = {
    post: null,
  }

  constructor(
    private postS: PostsService,
    private routeS: ActivatedRoute
  ) {

    const params = this.routeS.snapshot.params;

    this.on.postId = params.id;
  }

  ngOnInit() {
    console.log('_______ngOnInit');
    of(0).pipe(
      flatMap(this.fetchPost.bind(this)),
      tap(this.handleFetchPost.bind(this)),
      flatMap(this.fetchPostComments.bind(this)),
      tap(this.handleFetchPostComments.bind(this))
    ).subscribe();
  }

  onCommentsFilter() {
    console.log('_______onPostComments');
    of(0).pipe(
      flatMap(this.fetchPostComments.bind(this)),
      tap(this.handleFetchPostComments.bind(this))
    ).subscribe();
  }

  fetchPost() {
    console.log('_______fetchPosts');

    return this.postS.getPostById({ id: this.on.postId });
  }
  fetchPostComments() {
    console.log('_______fetchPosts');
    let params = {};

    for (let [key, value] of _.entries(this.on)) {
      if (value) {
        params[key] = value;
      }
    }

    return this.postS.getPostComments(params);
  }

  handleFetchPost(response) {
    console.log('handleFetchPosts', response);
    this.data.post = response;
  }

  handleFetchPostComments(response) {
    console.log('handleFetchPostComments', response);
    this.list.comments = response;
  }
}

export { ListPostCommentsComponent };
