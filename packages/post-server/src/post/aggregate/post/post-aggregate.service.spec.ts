import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from '../../entity/post/post.service';
import { PostAggregateService } from './post-aggregate.service';

describe('PostAggregateService', () => {
  let service: PostAggregateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostAggregateService,
        {
          provide: PostService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<PostAggregateService>(PostAggregateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
