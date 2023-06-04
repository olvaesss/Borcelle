import { Body, Controller, Put } from '@nestjs/common';
import { RoleChange } from './roles.model';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private RolesService: RolesService){}

    @Put('changeRole')
    ChangeRole(@Body() createPostDto:RoleChange){
        this.RolesService.changeRole(createPostDto)
    }}
