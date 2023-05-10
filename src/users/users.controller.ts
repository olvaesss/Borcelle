import { Body, Controller, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreatePostDto } from 'src/classes';
import { db } from 'src/firestore';

@Controller('register')
export class RegisterController {
    @Post()
    create(@Body() createPostDto:CreatePostDto){
        const docRef = db.collection('Users').doc(String(createPostDto.Email))
        const doc = docRef.get()
        return doc
    }
}

@Controller('login')
export class LoginContorller{
    @Post()
    create():string {
        return 'login post'
    }
}