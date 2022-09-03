import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptionLogService } from './option_log.service';
import { CreateOptionLogDto } from './dto/create-option_log.dto';
import { UpdateOptionLogDto } from './dto/update-option_log.dto';

@Controller('option-log')
export class OptionLogController {
  constructor(private readonly optionLogService: OptionLogService) {}

  @Post()
  create(@Body() createOptionLogDto: CreateOptionLogDto) {
    return this.optionLogService.create(createOptionLogDto);
  }

  @Get()
  findAll() {
    return this.optionLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optionLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOptionLogDto: UpdateOptionLogDto) {
    return this.optionLogService.update(+id, updateOptionLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionLogService.remove(+id);
  }
}
