export class UserInfo{
    constructor(Email=String,Name=String,Password=String){
        this.Email=Email
        this.Name=Name
        this.Password=Password
    }
    Email=String;
    Name=String;
    Password=String;
}

export const Users:UserInfo[] = []