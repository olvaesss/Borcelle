import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LoginContorller, RegisterController} from './users/users.controller'
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, LoginContorller, RegisterController],
  providers: [AppService, UsersService],
})
export class AppModule {}
