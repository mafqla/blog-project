import { PartialType } from '@nestjs/mapped-types';
import { CreateAticleDto } from './create-aticle.dto';

export class UpdateAticleDto extends PartialType(CreateAticleDto) {}
