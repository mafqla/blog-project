import { Test, TestingModule } from '@nestjs/testing'
import { AticleController } from './aticle.controller'
import { AticleService } from './aticle.service'

describe('AticleController', () => {
  let controller: AticleController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AticleController],
      providers: [AticleService]
    }).compile()

    controller = module.get<AticleController>(AticleController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
