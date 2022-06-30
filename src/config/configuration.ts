import { ConfigFactory } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/./../../.env' });

export const configuration: any = {
  env: process.env.NODE_ENV ?? 'development',
  port: process.env.APP_PORT ?? 3000,
  hackerNewsBaseUrl: 'https://hacker-news.firebaseio.com',
};

const configFunction: ConfigFactory<any> = () => configuration;
export default configFunction;
