import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { IPlayer } from './player.interface';

@Controller('player')
export class PlayerController {
  @Get()
  findAll(): string {
    return 'This action returns all players';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} player`;
  }

  @Post()
  create(@Body() createPlayerDto: IPlayer): string {
    return 'This action adds a new player';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: any): string {
    return `This action updates a #${id} player`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} player`;
  }
}
