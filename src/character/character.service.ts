import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Character } from './character.entity';
import { ICharacter } from './character.interface';

@Injectable()
export class CharacterService {
  constructor(
    @Inject('CHARACTER_REPOSITORY')
    private characterRepository: typeof Character,
  ) {}

  async findAll(): Promise<Character[]> {
    return this.characterRepository.findAll<Character>();
  }

  async findOne(id: number): Promise<Character> {
    return this.characterRepository.findOne<Character>({ where: { id } });
  }

  async create(character: ICharacter): Promise<Character> {
    return await this.characterRepository.create<Character>({
      ...character,
    });
  }

  async update(id: number, character: ICharacter): Promise<Character> {
    const findID = await this.characterRepository.findByPk<Character>(id);
    if (!findID) {
      throw new Error('Character not found');
    } else {
      await this.characterRepository.update(
        { ...character },
        { where: { id: findID.id } },
      );
      return await this.characterRepository.findByPk<Character>(id);
    }
  }

  async remove(id: number): Promise<number> {
    return this.characterRepository.destroy({ where: { id } });
  }
}
