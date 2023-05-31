import { Injectable, Post } from "@nestjs/common";
import {db} from '../firestore'

@Injectable()
export class RolesService{

    changeRole(User=String, Role=String){
        const CurrentUser = db.collection('users')
    }
}