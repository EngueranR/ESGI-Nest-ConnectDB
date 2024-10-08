import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Player } from './player.entity';
import { IPlayer } from './player.interface';

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

  async create(player: IPlayer): Promise<Player> {
    return await this.playerRepository.create<Player>({
      ...player,
      password: bcrypt.hashSync(player.password, 10),
    });
  }

  async update(id: number, player: IPlayer): Promise<[number]> {
    const findID = await this.playerRepository.findByPk<Player>(id);
    if (!findID) {
      throw new Error('Player not found');
    } else {
      return this.playerRepository.update(
        { ...player },
        { where: { id: findID.id } },
      );
    }
  }

  async remove(id: number): Promise<number> {
    return this.playerRepository.destroy({ where: { id } });
  }
}
