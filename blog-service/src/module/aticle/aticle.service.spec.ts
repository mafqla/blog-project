import { Test, TestingModule } from '@nestjs/testing'
import { AticleService } from './aticle.service'

describe('AticleService', () => {
  let service: AticleService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AticleService]
    }).compile()

    service = module.get<AticleService>(AticleService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
