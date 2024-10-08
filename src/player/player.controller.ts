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
import { Player } from './player.entity';

@Controller('player')
export class PlayerController {
  constructor(private PlayerService: PlayerService) {}

  @Get()
  async findAll(): Promise<Player[]> {
    return await this.PlayerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Player> {
    return await this.PlayerService.findOne(id);
  }

  @Post()
  async create(@Body('player') player: IPlayer): Promise<Player> {
    return await this.PlayerService.create(player);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('player') player: IPlayer,
  ): Promise<Player> {
    return await this.PlayerService.update(id, player);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<number> {
    return await this.PlayerService.remove(id);
  }
}
