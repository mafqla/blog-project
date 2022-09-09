import { Module } from '@nestjs/common'
import { RoleMenuService } from './role_menu.service'
import { RoleMenuController } from './role_menu.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { RoleMenu } from './model/role_menu.model'

@Module({
  imports: [SequelizeModule.forFeature([RoleMenu])],
  controllers: [RoleMenuController],
  providers: [RoleMenuService]
})
export class RoleMenuModule {}
