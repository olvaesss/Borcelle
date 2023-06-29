import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { RoleChange, Role } from './roles.model';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private RolesService: RolesService){}

    @Put('changeRole')
    ChangeRole(@Body() createPostDto:RoleChange){
        this.RolesService.changeUserRole(createPostDto)
    }

    @Put('createRole')
    CreateRole(@Body() RoleCreate:Role){
        this.RolesService.CreateRole(RoleCreate)
    }

    @Get('getRoleInfo')
    GetRoleInfo(@Body() GetRole:Role){
        this.RolesService.GetRoleInfo(GetRole)
    }
}