import { Test, TestingModule } from '@nestjs/testing';
import { PostAggregateService } from '../../aggregate/post/post-aggregate.service';
import { PostController } from './post.controller';

describe('PostController', () => {
  let controller: PostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [
        {
          provide: PostAggregateService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PostController>(PostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
