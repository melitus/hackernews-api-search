import { Module } from '@nestjs/common';
import { HackerNewsAPIService } from './hackernews.service';

@Module({
  providers: [HackerNewsAPIService],
  exports: [HackerNewsAPIService],
})
export class HackerNewsAPIModule {}
