import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
  responseData,
  responseErrorMessage,
  responseMessage,
  Axios,
  AxiosInstance,
  AxiosResponse
} from "../../shared/axios";


@Injectable()
export class HackerNewsAPIService {
  // eslint-disable-next-line prettier/prettier
  private readonly axiosInstance: AxiosInstance = Axios;

  constructor(
    private configService: ConfigService
  ) {

    const hackerNewsBaseUrl = (this.configService.get<string>('hackerNewsBaseUrl'));

    this.axiosInstance = Axios.create({
      baseURL: hackerNewsBaseUrl,
      timeout: 6000,
    });
  }

  async getUserById(userId: string): Promise<AxiosResponse | any> {
    const url = `v0/user/${userId}.json?print=pretty`
    try {
      const responseBody = await this.axiosInstance.get(url);
      if (responseBody.status > 299) {
        return responseMessage(responseBody);
      }
      return responseData(responseBody);
    } catch (error) {
      return responseErrorMessage(error);
    }
  }

  async getAStory(storyId: number): Promise<AxiosResponse | any> {
    const url = `v0/item/${storyId}.json?print=pretty`
    try {
      const responseBody = await this.axiosInstance.get(url);
      if (responseBody.status > 299) {
        return responseMessage(responseBody);
      }
      return responseData(responseBody);
    } catch (error) {
      return responseErrorMessage(error);
    }
  }

  async getLatestStories(): Promise<AxiosResponse | any> {
    const url = `v0/newstories.json?print=pretty`
    try {
      const responseBody = await this.axiosInstance.get(url);
      if (responseBody.status > 299) {
        return responseMessage(responseBody);
      }
      return responseData(responseBody);
    } catch (error) {
      return responseErrorMessage(error);
    }
  }

}
