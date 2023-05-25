import { Controller, Get, Param, Post, Res} from '@nestjs/common';
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

  @Get('Account')
  @Render('Userpage')
  Account():void{}
  
  @Get(`Resources/:filename`)
  async getImagee(@Param("filename") filename: string, @Res() res: any) {
    res.sendFile(filename, { root: 'src/Resources'});
  }
  
  @Get(`styles/:filename`)
  async getStyle(@Param('filename') filename: string, @Res() res: any) {
    res.sendFile(filename, {root: 'src/styles'})
  }  
  
  @Get(`Fonts/:filename`)
  async getFontStyle(@Param('filename') filename: string, @Res() res: any) {
    res.sendFile(filename, {root: 'src/Fonts'})
  }
}

