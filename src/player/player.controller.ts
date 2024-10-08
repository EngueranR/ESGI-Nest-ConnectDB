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
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private PlayerService: PlayerService) {}

  @Get()
  findAll(): any {
    return this.PlayerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action returns a #${id} player`;
  }

  @Post()
  create(@Body() player: IPlayer): string {
    return 'This action adds a new player';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() player: IPlayer): string {
    return `This action updates a #${id} player`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} player`;
  }
}
