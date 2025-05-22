import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  getPosts() {
    return 'get all posts';
  }

  getPost(id: number) {
    return `get post with id ${id}`;
  }

  createPost() {
    return 'create post';
  }

  updatePost(id: number) {
    return `update post with id ${id}`;
  }

  deletePost(id: number) {
    return `delete post with id ${id}`;
  }
}
