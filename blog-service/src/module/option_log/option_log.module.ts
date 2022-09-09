import { Module } from '@nestjs/common'
import { OptionLogService } from './option_log.service'
import { OptionLogController } from './option_log.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { OptionLog } from './model/option_log.model'

@Module({
  imports: [SequelizeModule.forFeature([OptionLog])],
  controllers: [OptionLogController],
  providers: [OptionLogService]
})
export class OptionLogModule {}
