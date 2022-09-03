import { Injectable } from '@nestjs/common';
import { CreateOptionLogDto } from './dto/create-option_log.dto';
import { UpdateOptionLogDto } from './dto/update-option_log.dto';

@Injectable()
export class OptionLogService {
  create(createOptionLogDto: CreateOptionLogDto) {
    return 'This action adds a new optionLog';
  }

  findAll() {
    return `This action returns all optionLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} optionLog`;
  }

  update(id: number, updateOptionLogDto: UpdateOptionLogDto) {
    return `This action updates a #${id} optionLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} optionLog`;
  }
}
