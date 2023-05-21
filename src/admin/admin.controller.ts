import { Controller, Get } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller('/admin')
export class AdminController{

    constructor(private adminService:AdminService){}

    @Get('getuser')
    getuser(){
        this.adminService.getUser()
    }
}