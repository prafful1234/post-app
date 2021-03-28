import { Module } from '@nestjs/common';
import { PostAggregateManager } from './aggregate';
import { PostControllerManager } from './controller';
import { PostEntityManager } from './entity';

@Module({
  controllers: [...PostControllerManager],
  providers: [...PostEntityManager, ...PostAggregateManager],
})
export class PostModule {}
