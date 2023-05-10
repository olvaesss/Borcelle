import { Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { Render } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get('/')
  @Render('index')
  index():void{}

  @Get('/login')
  @Render('login')
  login():void{}

  @Get('/register')
  @Render('register')
  register():void{}
}

