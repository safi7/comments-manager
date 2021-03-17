import { Injectable } from '@angular/core';
import { HttpService } from '@services/http.service';

@Injectable({ providedIn: 'root' })
export default class PostsService {
  constructor(private httpS: HttpService) { }

  getPostsList() {
    return this.httpS.get(`/posts`);
  }

  getPostById(payload) {
    return this.httpS.get(`/posts/${payload.id}`);
  }

  getPostComments(payload) {
    return this.httpS.get(`/comments`, payload);
  }
}

export { PostsService };
