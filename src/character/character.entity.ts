import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Character extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.STRING(50))
  name: string;

  @Column(DataType.DECIMAL(5, 2))
  health: number;

  @Column(DataType.INTEGER)
  strength: number;
}
