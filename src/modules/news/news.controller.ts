import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('News API')
@Controller('news')
export class NewsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly newsService: NewsService) {}

  @Get('getTopTenMostOccurringWordsInLast25Stories')
  async getTopTenWordsInLast25Stories(@Res() res: Response) {
   const foundTopTenMostOccurringWords = await this.newsService.topTenWordsInLast25Stories()
      return res.status(HttpStatus.OK).json(foundTopTenMostOccurringWords);
    }
  }
