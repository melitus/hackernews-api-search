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

async topTenWordsInLast25Stories() {
  const foundLatestStoriesIds: any = await this.getLatestStories();
  const lastStoryIds = foundLatestStoriesIds.data.slice(0, 25);
  const foundStories: any = await mapConcurrently(lastStoryIds, async (storyId: number | any) => {
    return await this.getAStory(storyId);
  });
  let title: string;
  foundStories.map((story: any) => {
    if (story.data.hasOwnProperty('title')) {
      title = title + ' ' + story.data.title;
    }
  })
  if (title != null) {
    const wordObject = transformToObject(title);
    const sortedObject = sortObject(wordObject);
    return sortedObject
  }
}

async topWordsInLast600StoriesOfUsers() {
  const foundLatestStoriesIds: any = await this.getLatestStories();
  const lastStoryIds = foundLatestStoriesIds.data.slice(0, 600);

  const foundStories = await mapConcurrently(lastStoryIds, async (storyId: any) => {
    return await this.getAStory(storyId);
  });
  const userIds: any = foundStories.map((x) =>x.data?.by);
  const users = await mapConcurrently(userIds, async (userId: any) => {
    return await this.getAUser(userId);
  });
  const qualifiedUsers = users.filter((user) => user.data?.karma >= 10);
  
  const qualifiedUserIds: Array<string> = qualifiedUsers.map((x) => x.data?.id);

  const filteredStories = foundStories.filter((story) =>
    qualifiedUserIds.includes(story.data?.by),
  );

  let title: string;
  filteredStories.map((story: any) => {
    if (story.data?.title != null) {
      title = title + ' ' + story.data.title;
    }
  })
  if (title != null) {
    const wordObject = transformToObject(title);
    const sortedObject = sortObject(wordObject);
    return sortedObject
  }
}

async topWordsInStoryOfLastWeek(storyId: number) {
  const foundStory = await this.getAStory(storyId);
  const storyTime = new Date(foundStory.data?.time).toISOString();
  const storyWeek = getWeekNumber(new Date(storyTime));
  const currentWeek = getWeekNumber(new Date());
  let response 
  if (currentWeek[0] != storyWeek[0] || currentWeek[1] - storyWeek[1] != 1) {
    response = {
      message: 'Only  stories of the past weeks is needed',
    };
  }

  if (foundStory.title != null) {
    const wordObject = transformToObject(foundStory.data?.title);
    const sortedObject = sortObject(wordObject);
    response = sortedObject;
  }
  return response;
}

}