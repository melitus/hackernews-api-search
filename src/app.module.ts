import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { NewsModule } from './modules/news/news.module';
import configuration from './config/configuration';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    NewsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      cache: false,
      envFilePath: '.env',
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

// export class AppModule {}
export class AppModule {}
