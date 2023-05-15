import { Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { Render } from '@nestjs/common';

@Controller('/')
export class AppController {

  constructor(private appService: AppService){}

  @Get('/')
  @Render('index')
  index():void{}

  @Get('/users/login')
  @Render('login')
  login():void{}

  @Get('/users/register')
  @Render('register')
  register():void{}

  @Get('Resources'+__filename)
  Resources(){
    return this.appService.Resources(__filename)
  }
}

