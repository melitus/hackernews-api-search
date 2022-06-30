import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('News API')
@Controller('news')
export class NewsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly newsService: NewsService) {}

 
  }
