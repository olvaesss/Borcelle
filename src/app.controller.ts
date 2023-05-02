import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { articles } from './articles';
import { Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  index() {
    return { articles };
  }
}

