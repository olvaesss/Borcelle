import { Injectable } from "@nestjs/common";
import {Users} from './admin.model'
import { db } from "src/firestore";

@Injectable()
export class AdminService{
    async getUsers(){
        const ref= db.collection('users')
        const map = await ref.get()
        Users.length=map.size-map.size
        map.forEach(doc=> {
            Users.push(doc.data().User)
        })
        console.log(this.unique(Users))
        return this.unique(Users)
    }

    private unique(arr:any) {
        let result = [];
      
        for (let str of arr) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
      
        return result;
      }
}