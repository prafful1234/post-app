import { Controller, Get, Param, Query } from '@nestjs/common';
import { PostAggregateService } from '../../aggregate/post/post-aggregate.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('posts')
export class PostController {
  constructor(private readonly postAggregate: PostAggregateService) {}
  @Get('')
  @ApiOperation({
    summary: 'Get a List of all post with pagination.',
    description: `This endpoint will give you a list of all posts, 
        you can pass in offset, limit and search as query parameters to paginate
        and search with regex matching on all fields of post.`,
  })
  getPostList(
    @Query('offset') offset = 0,
    @Query('limit') limit = 10,
    @Query('search') search = '',
  ) {
    return this.postAggregate.getList(Number(offset), Number(limit), search);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a single Post with Id.',
    description: `Takes in ID as the parameter and returns a single POST with matching ID,
        will throw not found exception if failed to find matching post,`,
  })
  getPost(@Param('id') id) {
    return this.postAggregate.getOne(id);
  }
}
