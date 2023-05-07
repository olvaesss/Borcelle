import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
import { Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {}

  @Get('/login')
  @Render('login')
  login(){}

  @Get('/register')
  @Render('register')
  register(){}
}

