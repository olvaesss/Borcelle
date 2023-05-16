import { Body, Injectable, Redirect, Render } from '@nestjs/common';
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
                    console.log('Success log in')
                }
                else{
                    console.log('Incorrect password')
                }
        }
        else{
            console.log('No such user')
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