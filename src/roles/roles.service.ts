import { Injectable } from '@nestjs/common';
import { db } from 'src/firestore';
import { RoleChange } from './roles.model';

@Injectable()
export class RolesService {
    async changeRole(User:RoleChange){
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
    }}
