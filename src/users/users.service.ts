import { Body, Injectable} from '@nestjs/common';
import {User , CreatePostDto} from '../classes'
import { db } from 'src/firestore';


@Injectable()
export class UsersService {


    async LoginUser(User: CreatePostDto){
        const docRef = db.collection('users').doc(String(User.Email))
        const doc = docRef.get()
        if((await doc).exists){
            let databaseData = (await doc).data()
            console.log(databaseData)
                if((User.Email==databaseData.User.Email)&&(User.Password==databaseData.User.Password)){
                    return 200
                }
                else{
                    return 201
                }
        }
        else{
            return 202
        }
    }

    async RegisterUser(User:CreatePostDto){
        const docRef = db.collection('users').doc(String(User.Email))
        const doc = docRef.get()
        if(!(await doc).exists){
            docRef.set({User})
        }
        else{
            console.log('User also registered')
        }
    }
}
