import { Injectable, NotFoundException } from '@nestjs/common';
import { PostService } from '../../entity/post/post.service';

@Injectable()
export class PostAggregateService {
  constructor(private readonly postService: PostService) {}

  getOne(id: number) {
    const post = this.postService.getOne(id);
    if (!post) {
      throw new NotFoundException('Post Not Found.');
    }
    return post;
  }

  getList(offset: number, limit: number, search: string) {
    return this.postService.getList(offset, limit, search);
  }
}
