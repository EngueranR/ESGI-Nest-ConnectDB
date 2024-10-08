import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class Player extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Unique
  @Column(DataType.STRING(50))
  pseudo: string;

  @Unique
  @Column(DataType.STRING(100))
  email: string;

  @Column(DataType.STRING)
  password: string;
}
