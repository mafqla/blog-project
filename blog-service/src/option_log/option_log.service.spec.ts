import { Test, TestingModule } from '@nestjs/testing';
import { OptionLogService } from './option_log.service';

describe('OptionLogService', () => {
  let service: OptionLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptionLogService],
    }).compile();

    service = module.get<OptionLogService>(OptionLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
