import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/board.dto';

@Injectable()
export class BoardService {
  getPosts() {
    return 'get all posts';
  }

  getPost(id: number) {
    return `get post with id ${id}`;
  }

  createPost(createBoardDto: CreateBoardDto) {
    return 'create post';
  }

  updatePost(id: number) {
    return `update post with id ${id}`;
  }

  deletePost(id: number) {
    return `delete post with id ${id}`;
  }
}
