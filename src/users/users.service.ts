import { Body, Injectable, Redirect, Session} from '@nestjs/common';
import { LoginUser, RegisterUser} from './users.model';
import { db } from 'src/firestore';
import { json } from 'stream/consumers';


@Injectable()
export class UsersService {


    async LoginUser(User: LoginUser){
        const docRef = db.collection('users').doc(String(User.Email))
        const doc = docRef.get()
        if((await doc).exists){
            let databaseData = (await doc).data()
            console.log(databaseData)
                if((User.Email==databaseData.Email)&&(User.Password==databaseData.Password)){ 
                    
                }
                else{
                    return '201'
                }
        }
        else{
            return '202'
        }
    }

    async RegisterUser(User:RegisterUser){
        const docRef = db.collection('users').doc(String(User.Email))//Обращаюсь к дб и создаю элемент коллекции юзера
        const doc = docRef.get()//обозначаю константу как элемент коллекции
        //условие если такого юзера нет
        User.Role='CommonUser'
        User.Purchases=0
        User.Created=new Date
        User.Discount=0
        User.Banned=false
        if(!(await doc).exists){
            docRef.set(User)//По ссылке на элемент закидываю туда мапу
            }
        else{
            console.log('User also registered')
        }
    }
}
