import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { HackerNewsAPIModule } from 'src/providers/hackenews/hackernews.module';

@Module({
  imports: [HackerNewsAPIModule],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
