import { Module } from '@nestjs/common'
import { ArchiveService } from './archive.service'
import { ArchiveController } from './archive.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Archive } from './model/archive.model'

@Module({
  imports: [SequelizeModule.forFeature([Archive])],
  controllers: [ArchiveController],
  providers: [ArchiveService]
})
export class ArchiveModule {}
