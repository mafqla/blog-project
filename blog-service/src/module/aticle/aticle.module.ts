import { Module } from '@nestjs/common'
import { AticleService } from './aticle.service'
import { AticleController } from './aticle.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Aticle } from './model/aticle.model'

@Module({
  imports: [SequelizeModule.forFeature([Aticle])],
  controllers: [AticleController],
  providers: [AticleService]
})
export class AticleModule {}
