import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateBoardDto } from './dto/board.dto';

@ApiTags('게시판 API')
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @ApiOperation({ summary: '모든 게시글 조회' })
  @Get()
  getPosts() {
    return this.boardService.getPosts;
  }

  @ApiOperation({ summary: '게시글 조회' })
  @Get(':id')
  getPost(id: number) {
    return this.boardService.getPost(id);
  }

  @ApiOperation({ summary: '게시글 생성' })
  @Post('create')
  createPost(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.createPost(createBoardDto);
  }

  @ApiOperation({ summary: '게시글 수정' })
  @Put('update/:id')
  updatePost(id: number) {
    return this.boardService.updatePost(id);
  }

  @ApiOperation({ summary: '게시글 삭제' })
  @Delete('delete/:id')
  deletePost(id: number) {
    return this.boardService.deletePost(id);
  }
}
