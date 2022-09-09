import { PartialType } from '@nestjs/mapped-types';
import { CreateOptionLogDto } from './create-option_log.dto';

export class UpdateOptionLogDto extends PartialType(CreateOptionLogDto) {}
