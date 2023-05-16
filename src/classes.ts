export class User{
    constructor(Username=String, Email=String, Password=String){
        this.Username=Username;
        this.Email=Email;
        this.Password=Password;
    }
    Username=String;
    Email=String;
    Password=String;
    Role=String;
    Banned=Boolean;
}

export class CreatePostDto {
    Username:String;
    Email:String;
    Password:String;

}