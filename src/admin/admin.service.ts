import { Injectable } from "@nestjs/common";
import {Users} from './admin.model'
import { db } from "src/firestore";

@Injectable()
export class AdminService{
    async getUsers(){
        const ref= db.collection('users')
        const map = await ref.get()
        Users.length=map.size-map.size //Это первый и, надеюсь, единственный костыль
        map.forEach(doc=> {
            Users.push(doc.data().User)
        })
        return (Users)
    }
    async getInfo(){
        
    }
}