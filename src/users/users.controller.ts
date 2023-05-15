import { Body, Controller, Get, Post} from '@nestjs/common';
import { CreatePostDto, User} from 'src/classes';
import {UsersService} from './users.service'
import { create } from 'domain';

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
}