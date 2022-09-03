import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AticleService } from './aticle.service';
import { CreateAticleDto } from './dto/create-aticle.dto';
import { UpdateAticleDto } from './dto/update-aticle.dto';

@Controller('aticle')
export class AticleController {
  constructor(private readonly aticleService: AticleService) {}

  @Post()
  create(@Body() createAticleDto: CreateAticleDto) {
    return this.aticleService.create(createAticleDto);
  }

  @Get()
  findAll() {
    return this.aticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAticleDto: UpdateAticleDto) {
    return this.aticleService.update(+id, updateAticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aticleService.remove(+id);
  }
}
