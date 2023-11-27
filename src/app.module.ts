import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {UserRoles} from "./roles/user-role.models";
import {Role} from "./roles/roles.model";

@Module({
    controllers:[],
    providers:[],
    imports:[
        ConfigModule.forRoot({
           envFilePath:`.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username:  process.env.DB_USERNAME,
            password:  process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [User, Role, UserRoles],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,

    ]
})
export class AppModule{}