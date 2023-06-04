import { Controller, Get, Render } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Users } from "./admin.model";


@Controller('admin')
export class AdminController{

    constructor(private adminService:AdminService){}
    @Get()
    @Render('admin')
    GetUsers(){
        this.adminService.getUsers()
        return {Users}
    }
}