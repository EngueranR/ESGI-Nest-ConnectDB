import { Inject, Injectable } from '@nestjs/common';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @Inject('PLAYER_REPOSITORY') private playerRepository: typeof Player,
  ) {}

  async findAll(): Promise<Player[]> {
    return this.playerRepository.findAll<Player>();
  }

  async findOne(id: number): Promise<Player> {
    return this.playerRepository.findOne<Player>({ where: { id } });
  }
}
