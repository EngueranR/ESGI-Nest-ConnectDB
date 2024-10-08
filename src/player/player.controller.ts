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
  findOne(@Param('id') id: number): any {
    return this.PlayerService.findOne(id);
  }

  @Post()
  create(@Body() player: IPlayer): any {
    return this.PlayerService.create(player);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() player: IPlayer): any {
    return this.PlayerService.update(id, player);
  }

  @Delete(':id')
  remove(@Param('id') id: number): any {
    return this.PlayerService.remove(id);
  }
}
