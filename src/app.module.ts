import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
@Module({
  imports: [MoviesModule],
  controllers: [AppController], // express router 같은 존재
  providers: [],
})
export class AppModule {}
