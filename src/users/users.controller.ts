import { Body, Controller, Get, Param, Post, Res} from '@nestjs/common';
import { CreatePostDto} from 'src/classes';
import {UsersService} from './users.service'

@Controller('users')
export class UserController {


    constructor(private userService: UsersService){}

    @Post('Login')
    Login(@Body() createPostDto:CreatePostDto){
        this.userService.LoginUser(createPostDto)
    }
    
    @Post('Register')
    Register(@Body() createPostDto:CreatePostDto){
        this.userService.RegisterUser(createPostDto)
    }

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