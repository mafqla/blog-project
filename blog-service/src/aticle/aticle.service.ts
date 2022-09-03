import { Injectable } from '@nestjs/common';
import { CreateAticleDto } from './dto/create-aticle.dto';
import { UpdateAticleDto } from './dto/update-aticle.dto';

@Injectable()
export class AticleService {
  create(createAticleDto: CreateAticleDto) {
    return 'This action adds a new aticle';
  }

  findAll() {
    return `This action returns all aticle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aticle`;
  }

  update(id: number, updateAticleDto: UpdateAticleDto) {
    return `This action updates a #${id} aticle`;
  }

  remove(id: number) {
    return `This action removes a #${id} aticle`;
  }
}
