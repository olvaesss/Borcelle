import { Body, Controller, Get, Param, Post, Redirect, Render, Res} from '@nestjs/common';
import { RegisterUser} from './users.model';
import {UsersService} from './users.service'

@Controller('users')
export class UsersController {


    constructor(private userService: UsersService){}

    @Post('Login')
    @Redirect('/')
    Login(@Body() createPostDto:RegisterUser){
        this.userService.LoginUser(createPostDto)
    }
    
    @Post('Register')
    @Redirect('/')
    Register(@Body() createPostDto:RegisterUser){
        this.userService.RegisterUser(createPostDto)
    }

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