import { Test, TestingModule } from '@nestjs/testing'
import { OptionLogController } from './option_log.controller'
import { OptionLogService } from './option_log.service'

describe('OptionLogController', () => {
  let controller: OptionLogController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptionLogController],
      providers: [OptionLogService]
    }).compile()

    controller = module.get<OptionLogController>(OptionLogController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
