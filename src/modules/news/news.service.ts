import { Injectable } from '@nestjs/common';
import { Story } from './interfaces/Story';
import { User } from './interfaces/User';
import { HackerNewsAPIService } from 'src/providers/hackenews/hackernews.service';
import {
  mapConcurrently,
  getWeekNumber,
  transformToObject,
  sortObject,
} from '../../shared/utils';


@Injectable()
export class NewsService {
  constructor(
    // eslint-disable-next-line prettier/prettier
    private readonly hackerNewAPIService: HackerNewsAPIService,

  ) {}

 private async getAUser(userId: string): Promise<User> {
    const foundUserById = await this.hackerNewAPIService.getUserById(userId);
    return foundUserById
  }

  private async getAStory(storyId: number): Promise<Story> {
    const foundStoryById = await this.hackerNewAPIService.getAStory(storyId);
    return foundStoryById
  }

  private async getLatestStories(): Promise<Array<number>> {
    const foundLatestStories = await this.hackerNewAPIService.getLatestStories(); 
    return foundLatestStories
}

}