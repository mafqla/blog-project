import { Module } from '@nestjs/common'
import { MenuService } from './menu.service'
import { MenuController } from './menu.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Menu } from './model/menu.model'

@Module({
  imports: [SequelizeModule.forFeature([Menu])],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
