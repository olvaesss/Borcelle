export class UserInfo{
    constructor(Email=String,Name=String,Password=String){
        this.Email=Email
        this.Name=Name
        this.Password=Password
    }
    Email=String;
    Name=String;
    Password=String;
    Created=Date;
    Discount=Number;
    Purchases=Number;
}

export const Users:UserInfo[] = []
