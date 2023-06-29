import { Injectable } from '@nestjs/common';
import { db } from 'src/firestore';
import { RoleChange, Role } from './roles.model';

@Injectable()
export class RolesService {
    async changeUserRole(User:RoleChange){
        const docRef = db.collection('users').doc(String(User.Email))
        const doc= await docRef.get()
        if(!doc.exists){
            console.log('Undefined User')
        }
        else{
            let Updated=doc.data()
            Updated.Role=User.Role
            docRef.set(Updated)
            console.log('Updated')
        }
    }
    async CreateRole(Role:Role){
        const docRef = db.collection('roles').doc(String(Role.Role))
        const doc = await docRef.get()
        console.log(Role)
        if(doc.exists){
            console.log("Role also created")
        }
        else{
            docRef.set(Role)
            console.log("Role with name:"+Role.Role+" has been created")
        }
    }
    async GetRoleInfo(Role:Role){
        const docRef = db.collection('roles').doc(String(Role.Role))
        const doc = await docRef.get()
        if(!doc.exists){
            console.log("Role is not found")
        }
        else{
            console.log(doc.data())
        }
    }
}
