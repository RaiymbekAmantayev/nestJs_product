import {Controller, Param, Get, Post, Body} from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {RolesService} from "./roles.service";

@Controller('roles')
export class RolesController {
    constructor(private roleRepository:RolesService) {
    }
    @Post()
    create(@Body() dto:CreateRoleDto){
        return this.roleRepository.createRole(dto);
    }
    @Get('/:value')
    getByValue(@Param('value') value:string){
        return this.roleRepository.getRoleByValue(value)
    }
}
