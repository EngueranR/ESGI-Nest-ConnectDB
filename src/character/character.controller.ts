import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from './character.entity';
import { ICharacter } from './character.interface';

@Controller('character')
export class CharacterController {
  constructor(private CharacterService: CharacterService) {}

  @Get()
  async findAll(): Promise<Character[]> {
    return await this.CharacterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Character> {
    return await this.CharacterService.findOne(id);
  }

  @Post()
  async create(@Body('character') character: ICharacter): Promise<Character> {
    return await this.CharacterService.create(character);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('character') character: ICharacter,
  ): Promise<Character> {
    return await this.CharacterService.update(id, character);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<number> {
    return await this.CharacterService.remove(id);
  }
}
