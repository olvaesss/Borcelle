// export class User{
//     constructor(Username=String, Email=String, Password=String, Role=String, Banned=Boolean, Created=Date, Discount=Number, Purchases=Number){
//         this.Username=Username;
//         this.Email=Email;
//         this.Password=Password;
//         this.Role=Role;
//         this.Banned=Banned
//         this.Created=Created
//         this.Discount=Discount
//         this.Purchases=Purchases
//     }
//     Username=String;
//     Email=String;
//     Password=String;
//     Role=String;
//     Banned=Boolean;
//     Created=Date;
//     Discount=Number;
//     Purchases=Number;
// }

export class RegisterUser{
    constructor(){
        this.Banned=false;
        this.Created=new Date
        this.Discount=0
        this.Purchases=0
    }
    Username:String;
    Email:String;
    Password:String;
    Role:String;
    Banned:Boolean;
    Created:Date;
    Discount:Number;
    Purchases:Number;
}

export class LoginUser{
    Email:String;
    Password:String;
}