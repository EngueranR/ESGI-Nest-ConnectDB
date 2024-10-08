import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { DatabaseModule } from 'src/database/database.module';
import { CharacterController } from './character.controller';
import { characterProviders } from './character.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CharacterController],
  providers: [CharacterService, ...characterProviders],
})
export class CharacterModule {}
