import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import {UsersModule} from './users/users.module'
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [RolesModule, UsersModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
