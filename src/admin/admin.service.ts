import { Injectable } from "@nestjs/common";
import {UserInfo, Users} from './admin.model'
import { db } from "src/firestore";
import { QueryDocumentSnapshot } from "firebase-admin/firestore";

@Injectable()
export class AdminService{
    async getUsers(){
        const ref= db.collection('users')
        const map = await ref.get()
        Users.length=map.size-map.size //Это первый и, надеюсь, единственный костыль
        map.forEach(doc=> {
            let User=doc.data();
            console.log(User)
            Users.push()
        })
        return (Users)
    }
    async getInfo(){
        
    }
}