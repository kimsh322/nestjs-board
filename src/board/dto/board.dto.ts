import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @ApiProperty({
    example: '오늘 저녁 뭐먹지?',
    description: '게시글 제목',
    required: true,
  })
  public title: string;

  @ApiProperty({
    example: '저녁은 치킨이나 먹어야지',
    description: '게시글 내용',
    required: true,
  })
  public contents: string;

  @ApiProperty({
    example: '123123123',
    description: '유저 id',
    required: true,
  })
  public userId: string;
}
