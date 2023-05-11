import { Body, Controller, Post, Redirect} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreatePostDto } from 'src/classes';
import { db } from 'src/firestore';
import { map } from 'rxjs';

@Controller('register')
export class RegisterController {
    @Post()
    async create(@Body() createPostDto:CreatePostDto){
        const docRef = db.collection('users').doc(String(createPostDto.Email))
        const doc = docRef.get()
        if(!(await doc).exists){
            docRef.set({createPostDto})
        }
    }
}

@Controller('login')
export class LoginContorller{
    @Post()
    async create(@Body() createPostDto:CreatePostDto){
        const docRef = db.collection('users').doc(String(createPostDto.Email))
        const doc = docRef.get()
        if((await doc).exists){
            let databaseData = (await doc).data()
                if((createPostDto.Email==databaseData.createPostDto.Email)&&(createPostDto.Password==databaseData.createPostDto.Password)){
                    return "Succesful"
                }
                else{
                    return "error"
                }
        }
        else{
            return "error"
        }
    }
}