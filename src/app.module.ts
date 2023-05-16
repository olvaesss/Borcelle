import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersController} from './users/users.controller'
import { UsersService } from './users/users.service';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, RolesController],
  providers: [AppService, UsersService, RolesService],
})
export class AppModule {}
