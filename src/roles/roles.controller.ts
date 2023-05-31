import { Controller, Post, Get} from "@nestjs/common";
import { RolesService } from "./roles.service";


@Controller('Roles')
export class RolesController{
    constructor(private RolesService: RolesService){}

    @Post('changeRole')
    Get_All_Users(){
        this.RolesService.changeRole()
    }
}