import { Controller, Post, Get} from "@nestjs/common";
import { RolesService } from "./roles.service";


@Controller('Roles')
export class RolesController{
    constructor(private RolesService: RolesService){}

    @Get('/Get_All_Users')
    Get_All_Users(){
        
    }

    @Post('/SetRole')
    SetRole(){
    
    }
}